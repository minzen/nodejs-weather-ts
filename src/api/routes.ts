'use strict'
import * as express from "express"
const controller = require('./controller')

module.exports = function(app: express.Application) {
  app.route('/about').get(controller.about)
  app.route('/temperature/:location').get(controller.getTemperature)
  app.route('/weather/:location').get(controller.getWeather)
}
