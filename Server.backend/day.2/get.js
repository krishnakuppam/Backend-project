const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Received a GET request on /');
    res.send('Hello this is krishna this my first backend server');
});

app.listen(5050, () => {
    console.log('Server is running on port 5050');
})