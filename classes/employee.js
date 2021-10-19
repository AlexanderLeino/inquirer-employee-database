const connection = require('../Connection.module')

const BaseOrm = require('BaseOrm')

class Employee extends BaseOrm {
    constructor(tableName,id,first_name,last_name, role_id,manager_id){
    super(tableName)
    this.first_name = first_name
    this.last_name = last_name

    }
    createNewRow(){
        connection.query(
            `INSERT INTO ?? (id,first_name,last_name,role_id)
            VALUES(??,?,?,?,?,?)`,
            [], function(err, results) {
                if(err) throw err
                console.log(results)
            }
        )
    }
    updateRow() {
        connection.query(
            `UPDATE ?? SET WHERE ? = ?`
        )
    } 
    
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to




//first_name VARCHAR(30) NOT NULL,
// last_name VARCHAR(30) NOT NULL,

// employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

module.exports= Employee