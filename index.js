const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: '1020',
    database: 'postgres'
});

client.connect();

client.query('SELECT  * FROM students', (err, res) =>{
    if(!err) {
        console.log(res.rows)
    } else {
        console.log(err)
    }
})