const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) =>{
    res.json({info: 'initial route'})
})

app.get('/students', db.getStudents)
app.post('/student', db.getStudentByName)
app.post('/students', db.createStudent)
app.put('/students', db.updateStudent)

app.listen(8080, () =>{
    console.log('port 8080 listening...')
});