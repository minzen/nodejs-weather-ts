# Simple weather microservice using Weatherstack API (Typescript variant)

+ Install typescript compiler by npm if not available.
+ Execute typescript compiler to transpile the *.ts files to JavaScript (ES5): _tsc_ 
+ The settings can be modified under tsconfig.json
+ Register an account at [https://weatherstack.com/](https://weatherstack.com/)
+ Add the obtained API key under ./built/.env with the name WEATHER_API_KEY, e.g. WEATHER_API_KEY=psaopiodshihjwefewhjf
+ execute in the built directory _npm install_ to install the dependencies
+ execute _node server.js_ to start the server on port 3000
+ query the current weather at a location by name
  + http://localhost:3000/weather/Bremen
+ query the current temperature at a location by name
  + http://localhost:3000/temperature/Bremen
