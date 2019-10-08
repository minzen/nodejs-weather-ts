require('dotenv').config()
import * as express from "express"
import { NextFunction } from "connect"
let request = require('request')

const apiKey = process.env.WEATHER_API_KEY

const temperature = {
  find: function(req: express.Request, res: express.Response, next: NextFunction) {
    if (!apiKey) {
      console.error('Add a WEATHER_API_KEY key to the .env file')
    } else {
      const location = req.params.location
      const temperatureUrl =
        'http://api.weatherstack.com/current?access_key=' +
        apiKey +
        '&query=' +
        location

      request(temperatureUrl, function(error: Error, response: express.Response, body: string) {
        if (!error && response.statusCode === 200) {
          let jsonResponse = JSON.parse(body)
          const temperature = jsonResponse.current.temperature
          console.log(
            'Current temperature in ' + location + ': ' + temperature + '°C'
          )
          res.json(temperature)
        } else {
          console.log(response.statusCode + body)
          res.send({ temperature: -1 })
        }
      })
    }
  }
}

module.exports = temperature
