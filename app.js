const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const address = process.argv[2];
if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (err, {longitude,latitude,location}) => {
    if (err) {
      return console.log(err);
    }
    forecast(longitude, latitude, (err, forecastData) => {
      if (err) {
        return console.log(err);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
 