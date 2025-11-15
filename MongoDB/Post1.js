// mongodb+srv://krishnakuppam38:krishnakuppam@cluster0.25wgae8.mongodb.net/

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./model/products');



main().catch(console.error);
app.use(express.json());

async function main() {
    try {
        await mongoose.connect('mongodb+srv://krishna:krishna@cluster0.vkucudk.mongodb.net/');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}







app.get('/', (req, res) => {
    res.send('Hello World!  MongoDB Connection Test');
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
