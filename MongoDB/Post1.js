// mongodb+srv://krishnakuppam38:krishnakuppam@cluster0.25wgae8.mongodb.net/

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./model/products');

app.use(express.json());

async function main() {
    try {
        await mongoose.connect('mongodb+srv://krishnakuppam38:krishnakuppam@cluster0.25wgae8.mongodb.net/test');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}







app.get('/products', async (req, res) => {

    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})





app.get('/', (req, res) => {
    res.send('Hello World!  MongoDB Connection Test');
});


main().catch(console.error);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
