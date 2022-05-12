const express = require('express');
const bodyParser = require('body-parser');

const convert = require('./converter')

const app = express()

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.get("/convert/:satuan/:suhu", (req, res) => {
    var satuan = req.params.satuan
    var suhu = Number(req.params.suhu)

    try {
        convert(satuan, suhu, res)
    } catch (error) {
        if (error.name == 'TypeError') {
            res.status(404)
            res.send({
                message: `Couldn't find route ${req.url}`
            })
        }
    }

})

const PORT = 1337
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})