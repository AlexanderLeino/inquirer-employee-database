const BaseOrm = require("./ViewAllQueriesConstructor");
const connection = require("../Connection.module");






    class AddDataSet {
        constructor(tableName, department_name){
            this.tableName = tableName
            this.department_name = department_name
        }
        async addDepartment(){
            return await connection.promise().query(
                `INSERT INTO department (department_name)
                 VALUES (?)`,
                 [this.department_name],
                 function (err, results) {
                     if (err) throw err
                     console.log(results)
                 }
                
            )
        }
    }

module.exports = AddDataSet