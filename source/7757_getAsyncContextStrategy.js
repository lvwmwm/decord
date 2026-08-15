// Module ID: 7757
// Function ID: 7758
// Name: getAsyncContextStrategy
// Dependencies: [7756, 7758]

// Module 7757 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7756) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7758) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(7758) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7756) /* getMainCarrier */.getMainCarrier();
  const obj = require(7756) /* getMainCarrier */;
  require(7756) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
