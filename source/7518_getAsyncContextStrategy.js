// Module ID: 7518
// Function ID: 7519
// Name: getAsyncContextStrategy
// Dependencies: [7517, 7519]

// Module 7518 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7517) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7519) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(7519) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7517) /* getMainCarrier */.getMainCarrier();
  const obj = require(7517) /* getMainCarrier */;
  require(7517) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
