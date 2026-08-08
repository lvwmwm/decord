// Module ID: 7473
// Function ID: 7474
// Name: getAsyncContextStrategy
// Dependencies: [7472, 7474]

// Module 7473 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7472) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7474) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(7474) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7472) /* getMainCarrier */.getMainCarrier();
  const obj = require(7472) /* getMainCarrier */;
  require(7472) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
