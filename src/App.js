class App {
    constructor({app, database, routes}){
        this._app = app;
        this._database = database;
        this._routes = routes;

        this._config();
        this._listen();
        this._route();
    }

    _config(){
        this._app.disable('etag');
    }

    _listen(){
        this._app.listen(3000, () => {
            console.log('listening on port 3000');
        });
    }

    _route() {
        this._routes.init(this._app, this._database);
    }
}

module.exports = App;