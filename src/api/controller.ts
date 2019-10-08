'use strict'
import * as express from "express"
const properties = require('../package.json')
const temperature = require('../service/temperature')
const weather = require('../service/weather')

let controllers = {
  about: function(req: express.Request, res: express.Response) {
    let aboutInfo = {
      name: properties.name,
      version: properties.version
    }
    res.json(aboutInfo)
  },
  getTemperature: function(req: express.Request, res: express.Response) {
    temperature.find(req, res, function(err: Error, temp: number) {
      if (err) res.send(err)
      res.json(temp)
    })
  },
  getWeather: function(req: express.Request, res: express.Response) {
    weather.find(req, res, function(err: Error, weather: string) {
      if (err) res.send(err)
      res.json(weather)
    })
  }
}

module.exports = controllers
