const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world22')
})

app.listen(port, () => {
    console.log(`Exsample app listening  http://localhost:${port}`);
})

