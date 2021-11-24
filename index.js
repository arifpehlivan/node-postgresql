const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) =>{
    res.json({info: 'initial route'})
})

app.get('/students', db.students.getStudents)
app.post('/student', db.students.getStudentByName)
app.delete('/students', db.students.delStudentByName)
app.post('/students', db.students.createStudent)
app.put('/students', db.students.updateStudent)

app.listen(8080, () =>{
    console.log('port 8080 listening...')
});