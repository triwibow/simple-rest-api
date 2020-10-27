const Models = require('./Models');

class Movie {
    constructor(app, database) {
        this._app = app;
        this._models = new Models(database);
    }

    getData(req, res){
        const data = this._models.getData(req,res);
    }

    getDataById(req, res){
        this._models.getDataById(req, res);
    }

    addData(req, res){
        this._models.addData(req, res);
    }

    editData(req, res){
        this._models.editData(req, res);
    }
}

module.exports = Movie;