const { database } = require("../../config/db-config");

class Models {
    constructor(database){
        this._connection = database;
    }

    getData(req, res){
        this._connection.query("SELECT * FROM movie_tb", (error, rows, field) => {
            if(error){
                console.log(error);
            } else {
                res.json({
                    "status": 200,
                    "message": "success",
                    "data": rows
                });
            }
        });
    }

    getDataById(req, res){
        this._connection.query(`SELECT * FROM movie_tb WHERE movie_id = ${req.params.id}`, (error, rows) => {
            if(error){
                console.log(error);
            } else {
                res.json({
                    "status": 200,
                    "message": "success",
                    "data": rows
                });
            }
        })
    }
}

module.exports = Models;