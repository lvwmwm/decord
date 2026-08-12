// Module ID: 7514
// Function ID: 7515
// Name: getAsyncContextStrategy
// Dependencies: [7513, 7515]

// Module 7514 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7513) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7515) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(7515) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7513) /* getMainCarrier */.getMainCarrier();
  const obj = require(7513) /* getMainCarrier */;
  require(7513) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
