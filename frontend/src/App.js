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
		<a href="http://localhost:8080/add-stock">Buy Stock &#x27A2;</a>
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
					<p>{data.quantity}</p>
				    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>

	    { /* I'm going to leave this here in the event I decide to add an option
	     * to buy stocks at the bottom of the list instead of at the top.
	     * I would remove this for production, of course.
	    
            <div>
                <h1>Buy New Stock</h1>
                <form method="POST" action="http://localhost:8080/add-stock">
                    <div>
                        <label> Ticker </label>
                        <input type="text" name="ticker" required />
                    </div>
                    <div>
                        <label> Quantity </label>
                        <input type="number" name="quantity" min="1" required />
                    </div>
                    <div>
                        <button type="submit">Add Stock</button>
                    </div>
                </form>
            </div>
	    */
	    }
        </Fragment>
    );
};

export default App;

