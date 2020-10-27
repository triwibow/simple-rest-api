const database = {

    mysql({db, host, user, password, database}){
        const connection = db.createConnection({db, host, user, password, database});
        connection.connect(err => {
            if(err) throw err;
            console.log('successful connection to database');
        });
    }
}


module.exports = database;