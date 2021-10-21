
const connection = require('../Connection.module')

class VAQueryConstructor {
    constructor(tableName){
        this.tableName = tableName
        
    }
    
    async getAll(){
       return await connection.promise().query(
            `SELECT * FROM ??`,
            [this.tableName],
            
        )
    }   
}

///base class with all the basic crud methods
//constructor takes in the names of tables
//extend if need to do more maintence
module.exports = VAQueryConstructor