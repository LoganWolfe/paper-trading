# Paper Trading Application
![Paper Trading Web App](https://user-images.githubusercontent.com/60913657/119407103-c1b48a80-bcb1-11eb-921c-83b21f46d39b.png)
Languages/Technologies Used: MERN (MongoDB, Express.js, React.js, Node.js), JavaScript, HTML, CSS. DB hosted with Microsoft Azure.

## Installation
1. Navigate to backend and front end folders to install dependencies using ``npm install``
2. Create a ``.env`` file in the root folder. Add ``DB_HOST``, ``DB_USER``, ``DB_PASS``, and ``API_KEY``.  
   MongoDB is used for storage, hosted using Microsoft Azure. Alternatively, you may set up a local database and only include ``DB_HOST`` and ``API_KEY``.
3. Run backend and frontend servers using ``npm run servers``
4. Navigate to ``http://localhost:8080`` to view the application.

## Difficulties
1. I usually shy away from front end development, so creating the UI was fairly difficult for myself. However, I gained experience and learned a lot building it. I learned a lot about React in particular, something I had little to no knowledge of previously.
2. I would like to have current price, P/L, % P/L, etc. included in the positions, but I kept hitting API limits. I did a lot of testing and would quickly hit 500 queries, a common monthly/daily cap for many free APIs. Some fixes include paying for higher limits or switching between APIs when caps are hit.

## Discussion/Comments
1. I could have done the classic list of rows for each stock, which is admittedly more compact, but I wanted to stick with "cards" for each position. It's just a little unique and I could easily update it if I wanted.
2. It's a bit of an eye sore, yes. I enjoyed working on the back end *much* more than the front end.
