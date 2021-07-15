const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const address = process.argv[2];
if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (err, data) => {
    if (err) {
      return console.log(err);
    }
    forecast(data.longitude, data.latitude, (err, forecastData) => {
      if (err) {
        return console.log(err);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}
 