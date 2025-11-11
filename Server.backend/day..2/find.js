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

app.get('/user/:name', (req, res) => {
    let username = req.params.name;
    let foundUser = user.find(u => u.name.toLowerCase() === username.toLowerCase());
    if (foundUser) {
        res.json(foundUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});


app.listen(5051, () => {
    console.log('Server is running on http://localhost:5051');
});
