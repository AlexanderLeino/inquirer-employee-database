const BaseOrm = require("./baseClass");
const connection = require("../Connection.module");

class Department extends BaseOrm {
    constructor(tableName,id,department_name){
        super(tableName)
        this.id = id
        this.department_name = department_name
    }
}

module.exports = Department