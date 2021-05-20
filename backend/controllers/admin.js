const Stock = require('../models/stock');

exports.getIndex = async (req, res) => {
    const stock = await Stock.find((data) => data);

    try {
        console.log(stock);
        res.status(200).render('index', { stock: stock });
    } catch (error) {
        console.log(error);
    }
};

exports.getStock = async (req, res) => {
    const stockId = req.params.stockId;

    const stock = await Stock.findById(stockId, (stock) => stock);
    const quantity = stock.quantity;

    try {
        console.log(stock);
        res.status(200).render('stock', { stock: stock, quantity: quantity});
    } catch (error) {
        console.log(error);
    }
};

exports.getAddStock = (req, res) => {
    res.status(200).render('edit-stock');
};

exports.postStock = (req, res) => {
    const { ticker, quantity } = req.body;

    const stock = new Stock({ ticker: ticker, quantity: quantity });
    stock.save();
    console.log('Stock added to the database');
    res.status(201).redirect('/');
};

exports.postDelete = async (req, res) => {
    const stockId = req.body.stockId;

    const stock = await Stock.findByIdAndRemove(stockId, (data) => data);

    try {
        console.log(stock);
        console.log('Item Deleted');
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};
