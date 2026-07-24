// Module ID: 7255
// Function ID: 58438
// Name: getAsyncContextStrategy
// Dependencies: [7254, 7256]

// Module 7255 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7254) /* getSentryCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7256) /* getAsyncContextStack */.getStackAsyncContextStrategy();
    const obj2 = require(7256) /* getAsyncContextStack */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7254) /* getSentryCarrier */.getMainCarrier();
  const obj = require(7254) /* getSentryCarrier */;
  require(7254) /* getSentryCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
