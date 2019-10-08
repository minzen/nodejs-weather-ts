'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var properties = require('../package.json');
var temperature = require('../service/temperature');
var weather = require('../service/weather');
var controllers = {
    about: function (req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        };
        res.json(aboutInfo);
    },
    getTemperature: function (req, res) {
        temperature.find(req, res, function (err, temp) {
            if (err)
                res.send(err);
            res.json(temp);
        });
    },
    getWeather: function (req, res) {
        weather.find(req, res, function (err, weather) {
            if (err)
                res.send(err);
            res.json(weather);
        });
    }
};
module.exports = controllers;
