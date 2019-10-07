require('dotenv').config()
let request = require('request')

const apiKey = process.env.WEATHER_API_KEY

const temperature = {
  find: function(req, res, next) {
    if (!apiKey) {
      console.error('Add a WEATHER_API_KEY key to the .env file')
    } else {
      const location = req.params.location
      const temperatureUrl =
        'http://api.weatherstack.com/current?access_key=' +
        apiKey +
        '&query=' +
        location

      request(temperatureUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          response = JSON.parse(body)
          const temperature = response.current.temperature
          console.log(
            'Current temperature in ' + location + ': ' + temperature + '°C'
          )
          res.json(temperature)
        } else {
          console.log(response.statusCode + response.body)
          res.send({ temperature: -1 })
        }
      })
    }
  }
}

module.exports = temperature
