"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var request = require('request');
var apiKey = process.env.WEATHER_API_KEY;
var weather = {
    find: function (req, res, next) {
        if (!apiKey) {
            console.error('Add a WEATHER_API_KEY key to the .env file');
        }
        else {
            var location_1 = req.params.location;
            var weatherUrl = 'http://api.weatherstack.com/current?access_key=' +
                apiKey +
                '&query=' +
                location_1;
            request(weatherUrl, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    response = JSON.parse(body);
                    console.log('Current weather in ' + location_1 + ': ' + JSON.stringify(response));
                    res.json(response);
                }
                else {
                    console.log(response.statusCode + body);
                    res.send({ weather: -1 });
                }
            });
        }
    }
};
module.exports = weather;
