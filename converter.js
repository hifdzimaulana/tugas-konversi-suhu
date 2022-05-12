const data = {
    "celcius": {
        constant: 5
    },
    "reamur": {
        constant: 4
    },
    "fahrenheit": {
        constant: 9
    },
    "kelvin": {
        addition: 273
    }
}

function convert(from, value, res) {
    let result = { ...data }
    delete result[from]

    if (from == 'kelvin') {
        const celcius = value - data['kelvin'].addition
        for (const item in result) {
            result[item] = (data[item].constant / data['celcius'].constant * celcius).toFixed(1)
        }
    }

    else {
        for (const item in result) {
            if (item == 'kelvin') {
                result[item] = ((data['celcius'].constant / data[from].constant * value) + data['kelvin'].addition).toFixed(1)
            }
            else {
                result[item] = (data[item].constant / data[from].constant * value).toFixed(1)
            }
        }
    }

    result = {
        [from]: value,
        result
    }
    res.send(result)
    return true
}

module.exports = convert