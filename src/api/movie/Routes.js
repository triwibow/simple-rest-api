const movie = require('./Movie');

class Routes {
    constructor(app, database){
        this._app = app;
        this._controller = movie;
        this._movie = new this._controller(app, database);
        this._route();
    }

    _route(){
        this._app.get('/api/movie/list', (req, res) => {
            this._movie.getData(req, res);
        });

        this._app.get('/api/movie/:id', (req, res) => {
            this._movie.getDataById(req, res);
        });

        this._app.post('/api/movie/add', (req, res) => {
            this._movie.addData(req, res);
        });
    }
}

module.exports = Routes;