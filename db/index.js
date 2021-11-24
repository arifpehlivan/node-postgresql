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

const updateStudent = (request, response) =>{
    const { name, surname, age, location} = request.body;
    client.query('UPDATE students SET name = $1, surname= $2, age = $3, location = $4 WHERE name = $1',
    [name, surname, age, location], (err, res) =>{
        if(!err) {
            response.status(201).send(`user ${name} ${surname}`);
        } else {
            console.log(err)
        }
    })
}

const getStudentByName = (request, response) =>{
    const { name } = request.body
    client.query('SELECT  * FROM students WHERE name = $1', [name], (err, res) =>{
        if(!err) {
            response.status(200).json(res.rows);
        } else {
            console.log(err)
        }
    })
}

const delStudentByName = (request, response) =>{
    const { name } = request.body
    client.query('DELETE FROM students WHERE name = $1', [name], (err, res) =>{
        if(!err) {
            response.status(200).send('user succesfully deleted');
        } else {
            console.log(err)
        }
    })
}

module.exports = {
    getStudents,
    createStudent,
    updateStudent,
    getStudentByName,
    delStudentByName
}