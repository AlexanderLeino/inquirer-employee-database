//Questions for office Hours
// In the readme it discusses breaking up functions into a seperate file. Is that something that you would recommend as well
//In the documentation for the console table it discusses retrieving information using objects should I jsut use sequilizer.
//Then for my class names should I just use three classes()
//You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.
// const BaseOrm = require('./classes/baseClass')
// const Employee = require('./classes/employee')
// const Roles = require('./classes/roleClass')
const addDataSet = require('./classes/addDataSet')
const inquirer = require('inquirer');
const VAQueryConstructor = require('./classes/ViewAllQueriesConstructor');


// GIVEN a command-line application that accepts user input
function initalizeApp () {
    // WHEN I start the application
    // THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    inquirer.prompt( [
        {
            type: 'list',
            name: 'whereTo',
            message: 'Where would you like to go first?',
            choices:['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role']
        }
    ])
    .then( async answer => {
        try {
            switch(answer.whereTo) {
    
                case 'View All Departments':
                    let departmentQuery = await new VAQueryConstructor(`department`).getAll()
                    console.table(departmentQuery[0])
                    break;
    
                case 'View All Roles':
                
                    let rolesQuery = await new VAQueryConstructor('roles').getAll()
                    console.table(rolesQuery[0])
                    break;
    
                case 'View All Employees':
                    
                    let employeeQuery = await new VAQueryConstructor('employee').getAll()
                    console.table(employeeQuery[0])   
                    break;
    
                case 'Add A Department':
                    //I am prompted to enter the name of the department and that department is added to the database
                    inquirer.prompt( [
                        {
                            type: 'input',
                            name: 'departmentName',
                            message: 'What is the name of the department you would like to add to the database.'
                        }
                    ]).then  (async answer => {
                        try {
                            let departmentQuery = await new addDataSet('department',answer.departmentName).addData()
                        
                        }
                        catch(e) {
                            console.log(e)

                        }
                    })
                    break;
    
                case 'Add A Role':
                   inquirer.prompt([
                       {
                           type:'input',
                           name:'newRole',
                           message:'What is the title for your new role?'
    
                       },
                       {
                           type:'input', 
                           name: 'salary',
                           message: 'What is the salary for the newly created role?'
                       },
                   ])
                    break;
                
                case 'Add An Employee':
                   inquirer.prompt( [
                       {
                           type:'input',
                           name:'firstName',
                           message:'Whats your new employees first name?'
                       },
    
                       {
                        type:'input',
                        name:'lastName',
                        message:'Whats your new employees last name?'
                        },
    
                        {
                            type:'input',
                            name:'lastName',
                            message:'Whats your new employees last name?'
                        }
    
    
                   ])
                    break;
    
                case 'Update An Employee Role':
                    inquirer.prompt( [
                        {
                            type: 'input',
                            name: 'employeeID',
                            message: 'What is the employees ID you are looking to update?'
                        },

                        {
                            type: 'input',
                            name: 'newRoleEmployee',
                            message: 'What is the tile of the new role you would like to assign to the employee?'
                        }

                    ])
                    break;
    
            }

        }
        catch (e) {
            throw e;            
        }
    })

}


// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
 
initalizeApp()