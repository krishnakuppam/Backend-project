const express = require('express');
const mongoose = require('mongoose');
const app = express();

// import model
const Product = require('./model/products');

app.use(express.json());

// ----------------------
// MONGODB CONNECTION
// ----------------------
async function main() {
    try {
        await mongoose.connect(
            'mongodb+srv://amongwith:amongwith@cluster0.tltfv96.mongodb.net/'
 );
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }
}

main();

// ----------------------
// ADD PRODUCT  (POST)
// ----------------------
app.post('/addproducts', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const saved = await newProduct.save();
        res.send(saved);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

// ----------------------
// GET ALL PRODUCTS
// ----------------------
app.get('/products', async (req, res) => {
    const allProducts = await Product.find();
    res.send(allProducts);
});

// ----------------------
// HOME ROUTE
// ----------------------
app.get('/', (req, res) => {
    res.send('Hello World! MongoDB Working ✔');
});

// ----------------------
// START SERVER
// ----------------------
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
