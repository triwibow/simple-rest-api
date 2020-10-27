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

    addData(req, res){
        const query = `INSERT INTO movie_tb (movie_id, movie_title, movie_publication_year, movie_description) 
            VALUES(
                NULL, "${req.body.movie_title}", "${req.body.movie_publication_year}", "${req.body.movie_description}"
            )`;

        this._connection.query(query, (error, rows) => {
            if(error){
                console.log(error);
            } else {
                res.json({
                    "status": 200,
                    "message": "successfully added data"
                });
            }
        })
    }
}

module.exports = Models;