'use strict'

const properties = require('../package.json')
const temperature = require('../service/temperature')
const weather = require('../service/weather')

let controllers = {
  about: function(req, res) {
    let aboutInfo = {
      name: properties.name,
      version: properties.version
    }
    res.json(aboutInfo)
  },
  getTemperature: function(req, res) {
    temperature.find(req, res, function(err, temp) {
      if (err) res.send(err)
      res.json(temp)
    })
  },
  getWeather: function(req, res) {
    weather.find(req, res, function(err, weather) {
      if (err) res.send(err)
      res.json(weather)
    })
  }
}

module.exports = controllers
