const { fetchMyIP, fetchCoordsByIP } = require('./iss');



// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log("It didn't work!" , err);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
  
// });

fetchCoordsByIP('174.0.213.132', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});