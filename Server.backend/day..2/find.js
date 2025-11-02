const express = require('express');
const app = express();

const user = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Heidi' },
    { id: 9, name: 'Ivan' },
    { id: 10, name: 'Judy' }
    
];


app.get('/user', (req, res) => {
    res.json(user);
});

// app.get('/user/:id', (req, res) => {
//     const id = parseInt(req.params.



app.listen(5051, () => {
    console.log('Server is running on http://localhost:5051');
});
