require('dotenv').config()
import * as express from "express"
let request = require('request')

const apiKey = process.env.WEATHER_API_KEY

const weather = {
  find: function(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!apiKey) {
      console.error('Add a WEATHER_API_KEY key to the .env file')
    } else {
        const location = req.params.location
        const weatherUrl =
        'http://api.weatherstack.com/current?access_key=' +
        apiKey +
        '&query=' +
        location

        request(weatherUrl, function(error: Error, response: express.Response, body: string) {
        if (!error && response.statusCode === 200) {
            response = JSON.parse(body)
            console.log('Current weather in ' + location + ': ' + JSON.stringify(response))
            res.json(response)
        } else {
            console.log(response.statusCode + body)
            res.send({ weather: -1 })
        }
        })
    }
  }
}

module.exports = weather
