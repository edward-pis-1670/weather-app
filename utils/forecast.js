const request = require("request");

const forecast = (lat, lon, callback) => {
  const url =
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=8e494f0f3a5c02740ceca7f6e4a81a25&exclude=hourly,minutely&units=metric`;
  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to weather service!", undefined);
    } else if (res.body.daily === 0) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        feels_like: res.body.current.feels_like,
        pressure: res.body.current.pressure,
        summary: res.body.current.weather[0].description,
      });
    }
  });
};


module.exports = forecast
