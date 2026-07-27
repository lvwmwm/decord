// Module ID: 6330
// Function ID: 56891
// Name: getAsyncContextStrategy
// Dependencies: [6329, 6331]

// Module 6330 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(6329) /* getSentryCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(6331) /* getAsyncContextStack */.getStackAsyncContextStrategy();
    const obj2 = require(6331) /* getAsyncContextStack */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(6329) /* getSentryCarrier */.getMainCarrier();
  const obj = require(6329) /* getSentryCarrier */;
  require(6329) /* getSentryCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
