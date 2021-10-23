const connection = require('../Connection.module')


class Employee {
    constructor(first_name, last_name){
        this.first_name = first_name
        this.last_name = last_name
    }
    async addEmployee(first_name,last_name){
        return await connection.promise().query(
            `INSERT INTO employee (first_name,last_name)
             VALUES (?, ?)`,
             [this.first_name, this.last_name],
             function (err, results) {
                 if (err) throw err
                 console.log(results)
             }
        )
    }
    
}
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to




//first_name VARCHAR(30) NOT NULL,
// last_name VARCHAR(30) NOT NULL,

// employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

module.exports = Employee