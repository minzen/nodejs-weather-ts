'use strict'

const controller = require('./controller')

module.exports = function(app) {
  app.route('/about').get(controller.about)
  app.route('/temperature/:location').get(controller.getTemperature)
  app.route('/weather/:location').get(controller.getWeather)
}
