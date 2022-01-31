const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello World');
})

app.post('/', (req, res) => {
    const {name, age, email} = req.body;

    const user = {name, age, email};

    const result = 'My name is ${user.name}, I am ${user.age} years old and my email is ${user.email}';

    res.send(result);
})

app.listen(3000, () => {
    console.log('we be listening on 3000');
})
