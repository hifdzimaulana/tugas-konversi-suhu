const Converter = {

    fromCelcius(c, res) {
        var result = {
            "celcius": c,
            "result": {
                "reamur": 4 / 5 * c,
                "fahrenheit": 9 / 5 * c,
                "kelvin": c + 273
            }
        }

        res.send(result)
        return true;
    },

    fromReamur(r, res) {
        var result = {
            "reamur": r,
            "result": {
                "celcius": 5 / 4 * r,
                "fahrenheit": 9 / 4 * r,
                "kelvin": 5 / 4 * r + 273
            }
        }

        res.send(result)
        return true;
    },

    fromFahrenheit(f, res) {
        var result = {
            "fahrenheit": f,
            "result": {
                "celcius": 5 / 9 * f,
                "reamur": 4 / 9 * f,
                "kelvin": 5 / 9 * f + 273
            }
        }

        res.send(result)
        return true
    },

    fromKelvin(k, res) {
        var result = {
            "kelvin": k,
            "result": {
                "celcius": k - 273,
                "reamur": (k - 273) * 4 / 5,
                "fahrenheit": (k - 273) * 9 / 5
            }
        }

        res.send(result)
        return true
    }
}
module.exports = Converter