const express = require('express');
const bodyParser = require('body-parser');

const docRouter = require('./src/documentRouter');

const app = express()

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.status(200).send({'message': 'YAY! Lets generate that Pdf'});
})

app.use("/", docRouter);

app.listen(3000, () => console.log('App running on port ', 3000));
