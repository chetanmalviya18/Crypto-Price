import express from "express";
import axios from "axios";
import ejs from "ejs";

const app = express();
const port = 3000;

const cryptocurrencies = [
    { name: 'Bitcoin', symbol: 'BTC', price: 45000 },
    { name: 'Ethereum', symbol: 'ETH', price: 3000 },
    // Add more cryptocurrencies as needed
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('crypto', { cryptocurrencies });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});