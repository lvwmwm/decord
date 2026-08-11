// Module ID: 7475
// Function ID: 7476
// Name: getAsyncContextStrategy
// Dependencies: [7474, 7476]

// Module 7475 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7474) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7476) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(7476) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7474) /* getMainCarrier */.getMainCarrier();
  const obj = require(7474) /* getMainCarrier */;
  require(7474) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
