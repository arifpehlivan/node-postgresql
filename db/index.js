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

const createStudent = (request, response) =>{
    const { name, surname, age, location} = request.body;
    client.query('INSERT INTO students VALUES ($1, $2, $3, $4)',
    [name, surname, age, location], (err, res) =>{
        if(!err) {
            response.status(201).send(`user ${name} ${surname}`);
        } else {
            console.log(err)
        }
    })
}

module.exports = {
    getStudents,
    createStudent
}