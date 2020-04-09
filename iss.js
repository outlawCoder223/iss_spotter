/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = callback => {
  request('https://api.ipify.org?format=json', (err, response, body) => {
    if (err) return callback(err, null);
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }
    const IP = JSON.parse(body).ip;
    callback(null, IP);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request('https://ipvigilante.com/' + ip , (err, response, body) => {
    if (err) return callback(err, null);
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }
    const lat = JSON.parse(body).data.latitude;
    const long = JSON.parse(body).data.longitude;
    const coords = `Latitude: ${lat} Longitude: ${long}`;
    callback(null, coords)
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP };