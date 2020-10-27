class App {
    constructor({app, database, routes, bodyParser}){
        this._app = app;
        this._database = database;
        this._routes = routes;
        this._bodyParser = bodyParser;

        this._config();
        this._listen();
        this._route();
    }

    _config(){
        this._app.disable('etag');

        // application/json type post data
        this._app.use(this._bodyParser.json());

        //application/x-www-form-urlencoded post data
        this._app.use(this._bodyParser.urlencoded({ extended: false }));
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