import React, { Fragment, useEffect, useState } from 'react';
import './App.css';

const App = () => {
    useEffect(() => {
        const getAPI = async () => {
            const response = await fetch('http://localhost:8080/');
            const data = await response.json();

            try {
                console.log(data);
                setLoading(false);
                setStock(data);
            } catch (error) {
                console.log(error);
            }
        };
        getAPI();
    }, []);

    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <Fragment>
	    <header>
            <h1>Paper Trading</h1>
	    	<a href="http://localhost:8080">View All Positions</a>
		    <a href="http://localhost:8080/add-stock">Buy New Stock &#x27A2;</a>
	    </header>

            <div class="container">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        {stock.map((data) => (
                            <div key={data._id}>
                                <ul class="stock">
                                    <li>
                                        <h1>
                                            <a href={data._id}> {data.ticker} </a>
                                        </h1>
                                    </li>

                                    <li>
                                        <p>Quantity: {data.quantity}</p>
                                    </li>

                                    <li>
                                        <p>Avg. Fill Price: </p>
                                    </li>

                                    <li>
                                        <p>Current Price: </p>
                                    </li>

                                    <li>
                                        <p>P/L ($USD)</p>
                                    </li>

                                    <li>
                                        <p>% P/L</p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
	    }
        </Fragment>
    );
};

export default App;

