const express = require('express');
const app = express();

app.use(express.json());


app.post('/data', (req, res) => {
    const receivedData = req.body;
    res.json({
        message: 'Data received successfully',
        data: receivedData
    });
});
app.listen(5052, () => {
    console.log('Server is running on http://localhost:5052');
});


// mongodb+srv://krishnakuppam38:krishnakuppam@cluster0.25wgae8.mongodb.net/