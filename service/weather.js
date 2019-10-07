require('dotenv').config()
let request = require('request')

const apiKey = process.env.WEATHER_API_KEY

const weather = {
  find: function(req, res, next) {
    if (!apiKey) {
      console.error('Add a WEATHER_API_KEY key to the .env file')
    } else {
        const location = req.params.location
        const weatherUrl =
        'http://api.weatherstack.com/current?access_key=' +
        apiKey +
        '&query=' +
        location

        request(weatherUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            response = JSON.parse(body)
            console.log('Current weather in ' + location + ': ' + response)
            res.json(response)
        } else {
            console.log(response.statusCode + response.body)
            res.send({ weather: -1 })
        }
        })
    }
  }
}

module.exports = weather
