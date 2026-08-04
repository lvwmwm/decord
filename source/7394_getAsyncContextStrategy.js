// Module ID: 7394
// Function ID: 7395
// Name: getAsyncContextStrategy
// Dependencies: [7393, 7395]

// Module 7394 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7393) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7395) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(7395) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7393) /* getMainCarrier */.getMainCarrier();
  const obj = require(7393) /* getMainCarrier */;
  require(7393) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
