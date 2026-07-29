// Module ID: 6387
// Function ID: 6388
// Name: getAsyncContextStrategy
// Dependencies: [6386, 6388]

// Module 6387 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(6386) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(6388) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(6388) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(6386) /* getMainCarrier */.getMainCarrier();
  const obj = require(6386) /* getMainCarrier */;
  require(6386) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
