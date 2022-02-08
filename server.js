const express = require('express');
const bodyParser = require('body-parser');

const Converter = require('./converter')

const app = express()

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.get("/convert/:satuan/:suhu", (req, res) => {
    var satuan = req.params.satuan
    var suhu = Number(req.params.suhu)

    switch (satuan) {
        case 'celcius':
            Converter.fromCelcius(suhu, res)
            break;
        case 'reamur':
            Converter.fromReamur(suhu, res)
            break;
        case 'fahrenheit':
            Converter.fromFahrenheit(suhu, res)
            break;
        case 'kelvin':
            Converter.fromKelvin(suhu, res)
            break;
        default:
            res.status(404)
            res.send({
                "message": `Couldn't find route ${req.url}`
            })
            break;
    }
})

const PORT = 1337
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})