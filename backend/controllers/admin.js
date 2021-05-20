const Stock = require('../models/stock');

exports.getIndex = async (req, res) => {
    const stock = await Stock.find((data) => data);

    try {
        console.log(stock);

	res.status(200).render('index', { stock: stock });

        //res.json(stock);
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
    res.status(200).render('edit-stock', {editing: false});
};

exports.postStock = (req, res) => {
    const { ticker, quantity } = req.body;

    const stock = new Stock({ ticker: ticker, quantity: quantity });
    stock.save();
    console.log('Stock added to the database');
    res.status(201).redirect('/');
};

exports.getEditStock = async (req, res) => {
    const stockId = req.params.stockId;

    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');
    }

    const stock = await Stock.findById(stockId);

    try {
        if (!stockId) {
            return res.redirect('/');
        }
        console.log(stock);
        res.status(200).render('edit-stock', { stock: stock, editing: editMode });
    } catch (error) {
        console.log(error);
    }
};

exports.postEditStock = (req, res) => {
    const stockId = req.body.stockId;
    const { ticker, quantity } = req.body;

    Anime.findById(stockId)
        .then((stpock) => {
	    stock.ticker = ticker;
	    stock.quantity = quantity;
            return stock.save();
        })
        .then(() => {
            console.log('Item Updated');
            res.status(201).redirect('/${stockId}');
        })
        .catch((err) => {
            console.log(err);
        });
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
