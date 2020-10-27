const Models = require('./Models');

class Movie {
    constructor(app, database) {
        this._app = app;
        this._models = new Models(database);
    }

    getData(req, res){
        const data = this._models.getData(req,res);
        // console.log(data);
        // res.json({
        //     "status": 200,
        //     "data": data
        // });
    }
}

module.exports = Movie;