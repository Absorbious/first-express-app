const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('We got a new request!');
//     res.send('<h1>Hello, this is an Express exercise</h1>')
// })

app.get('/r/:adnan', (req, res) => {
    const {adnan} = req.params;
    res.send(`<h1>${adnan} je Najbolji</h1>`);
});

app.get('*', (req, res) => {
    res.send(`<h1>I Don't know that way</h1>`);
})

app.listen(8080, () => {
    console.log('listening on 8080');
})