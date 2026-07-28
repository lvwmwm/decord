// Module ID: 6366
// Function ID: 56980
// Name: getAsyncContextStrategy
// Dependencies: [6365, 6367]

// Module 6366 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(6365) /* getSentryCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(6367) /* getAsyncContextStack */.getStackAsyncContextStrategy();
    const obj2 = require(6367) /* getAsyncContextStack */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(6365) /* getSentryCarrier */.getMainCarrier();
  const obj = require(6365) /* getSentryCarrier */;
  require(6365) /* getSentryCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
