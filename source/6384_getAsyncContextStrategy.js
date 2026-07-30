// Module ID: 6384
// Function ID: 6385
// Name: getAsyncContextStrategy
// Dependencies: [6383, 6385]

// Module 6384 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(6383) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(6385) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(6385) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(6383) /* getMainCarrier */.getMainCarrier();
  const obj = require(6383) /* getMainCarrier */;
  require(6383) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
