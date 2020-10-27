const MovieRoute = require('./src/api/movie/Routes');

const routes =  {
    init(app, database){
        new MovieRoute(app, database);
    }
}

module.exports = routes;