import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.render("crypto.ejs", 
    { symbol: "xxx-xxx",
price: "xxxx"});
})

app.post('/', async (req, res) => {
    const bar = req.body.searchbar;
    try {
        const result = await axios.get(`https://api.blockchain.com/v3/exchange/tickers/${bar}`)
        res.render("crypto.ejs", 
        { symbols: result.data.symbol,
        prices: result.data.price_24h});
    } catch (error) {
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});