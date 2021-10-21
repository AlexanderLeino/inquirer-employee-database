const connection = require("../Connection.module");
const BaseOrm = require("./baseClass");


class Roles extends BaseOrm{
    constructor(tableName, title, salary) {
    super(tableName)
    this.title = title
    this.salary = salary 
    }
    
}

module.exports = Roles