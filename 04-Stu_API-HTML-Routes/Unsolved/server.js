// TODO: Import express
const express = require('express');
// TODO: Import 'terms.json' fileconst PORT = 3001;
const app = express();
const path = require("./terms.json")
const PORT = 3001;

// TODO: Initialize app variable

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/', (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
