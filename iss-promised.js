const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchMyCoords = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/${ip}`);
};

const fetchMyFlyovers = function(coordinates) {
  const coords = JSON.parse(coordinates).data;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  return request(url);
};

const nextISSFlyovers = function() {
  return fetchMyIP()
    .then(fetchMyCoords)
    .then(fetchMyFlyovers)
    .then(data => {
      const flyovers = JSON.parse(data).response;
      return flyovers;
    });
};

module.exports = { nextISSFlyovers };
