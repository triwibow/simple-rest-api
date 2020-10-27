class App {
    constructor({app, database}){
        this._app = app;
        this._database = database;
        this._listen();
    }

    _listen(){
        this._app.listen(3000, () => {
            console.log('listening on port 3000');
        });
    }
}

module.exports = App;