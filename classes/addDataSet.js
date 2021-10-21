const BaseOrm = require("./ViewAllQueriesConstructor");
const connection = require("../Connection.module");





switch (tableName) {
    case 'department':
    class AddDataSet {
        constructor(tableName,department_name){
            this.tableName = tableName
            this.department_name = department_name
        }
        async addData(){
            return await connection.promise().query(
                `INSERT INTO ?? (${this.department_name}))
                VALUES (${this.department_name})`
            )
        }
    }   
    break;
}

module.exports = Department