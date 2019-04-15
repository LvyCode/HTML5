// npm i express
const express = require( id :'express');
const app = express();

app.get('/',function (req, res) {
    res.send('Hello word!')
});

//监听端口
app.listen(233)