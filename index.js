const express = require('express');
const morgan = require('morgan');
const db = require('./src/models');
const { default: apiRouter } = require('./src/routes');

const app = express()
const port = 8080

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
.catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

app.use(morgan('dev'))
app.use(express.json());
app.use(apiRouter);

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})