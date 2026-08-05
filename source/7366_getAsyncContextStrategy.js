// Module ID: 7366
// Function ID: 7367
// Name: getAsyncContextStrategy
// Dependencies: [7365, 7367]

// Module 7366 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7365) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7367) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(7367) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7365) /* getMainCarrier */.getMainCarrier();
  const obj = require(7365) /* getMainCarrier */;
  require(7365) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
