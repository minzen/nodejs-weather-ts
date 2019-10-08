"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var request = require('request');
var apiKey = process.env.WEATHER_API_KEY;
var temperature = {
    find: function (req, res, next) {
        if (!apiKey) {
            console.error('Add a WEATHER_API_KEY key to the .env file');
        }
        else {
            var location_1 = req.params.location;
            var temperatureUrl = 'http://api.weatherstack.com/current?access_key=' +
                apiKey +
                '&query=' +
                location_1;
            request(temperatureUrl, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    var jsonResponse = JSON.parse(body);
                    var temperature_1 = jsonResponse.current.temperature;
                    console.log('Current temperature in ' + location_1 + ': ' + temperature_1 + '°C');
                    res.json(temperature_1);
                }
                else {
                    console.log(response.statusCode + body);
                    res.send({ temperature: -1 });
                }
            });
        }
    }
};
module.exports = temperature;
