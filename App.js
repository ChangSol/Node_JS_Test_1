let test_module = require('./test_module.js');
let express = require('express');
let app = express();

app.listen(3000, ()=>{
    console.log(test_module.test);    
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send(test_module.test);
    // res.sendFile(__dirname + '/public/index.html');
    res.sendFile('index.html');
});

app.post('/post_result', (req, res) => {
    res.send(req.body);
});
