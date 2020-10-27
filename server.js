const express = require('express');
const mysql = require('mysql');
const route = require('./routes');
const config = require('./src/config/db-config');
const database = require('./src/config/database');
const App = require('./src/App');

const app = new App({
    app: express(),
    database: database.mysql({
        db: mysql,
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    }),
    routes: route
});
