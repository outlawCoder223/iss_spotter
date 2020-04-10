const { nextISSFlyovers } = require('./iss-promised');


const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSFlyovers()
  .then(flyovers => {
    printPassTimes(flyovers);
  })
  .catch(error => {
    console.log("That didn't work... ", error.message);
  });
