const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: '1020',
    database: 'postgres'
});

client.connect();

 

const getStudents = (request, response) =>{
    client.query('SELECT  * FROM students', (err, res) =>{
        if(!err) {
            response.status(200).json(res.rows);
        } else {
            console.log(err)
        }
    })
}

module.exports = {getStudents}