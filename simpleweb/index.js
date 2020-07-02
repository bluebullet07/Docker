const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('Hi mate Whatsup');
});

app.listen(8080,() => {
    console.log('I am listening on port 8080 alpha unga ownera kanoom');
});