const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const search = 'Suzuki';

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const sqlGet = "SELECT KundID FROM kunder WHERE Namn = ?";
    db.query(sqlGet, [search], (err, result) => {
        res.send(result);
    });
});

app.post('/api/submit', (req, res) => {
    const namn = req.body.namn;
    const sqlInsert = "INSERT INTO kunder (namn) VALUES (?)";
    db.query(sqlInsert, [namn], (err, result) => {
        console.log(err);
    });
});

app.post('/api/register', (req, res) => {
    const anv = req.body.anv;
    const pass = req.body.pass;
    const sqlReg = "INSERT INTO användare (anv, pass) VALUES (?,?)";
    db.query(sqlReg, [anv, pass], (err, result) => {
        console.log(err);
    });
});

app.get('/api/login', (req, res) => {
    const anv = req.body.anv;
    const sqlLogin = "SELECT pass FROM användare WHERE anv = ?";
    db.query(sqlReg, [anv], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log('running on port 3001');
});