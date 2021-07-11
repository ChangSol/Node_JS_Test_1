const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

//Server Start 3000 Port
app.listen(3000, () => {
    console.log('Start Server : localhost:3000')
});

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs'); 
app.engine('html', require('ejs').renderFile);

app.get('/', function(req,res){
    res.render('index.html');
});

app.get('/about', function(req,res){
    res.render('about.html');
});

const dbconfig = { 
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PW, 
    database: process.env.DB_NAME, 
    port: process.env.DB_PORT
};

const pg = require('pg');
const client = new pg.Client(dbconfig)

client.connect(err => { 
    if (err) { 
        console.error('connection error', err.stack) 
    } else { 
        console.log('database connection success!') 
    } 
});

app.get('/db', function(req, res){
    client.query('SELECT * FROM users').then(result => {
        const fields = result.fields.map(field => field.name);  
        const data = result.rows;
        res.send(JSON.stringify(data))
    }).catch(err => {
        console.log(err.stack);
    }).finally(() => {
        // client.end();
        // console.log('client end');
    });    
    // res.send(JSON.stringify(rows))
});

