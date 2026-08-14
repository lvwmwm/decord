// Module ID: 7539
// Function ID: 7540
// Name: getAsyncContextStrategy
// Dependencies: [7538, 7540]

// Module 7539 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7538) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7540) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(7540) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7538) /* getMainCarrier */.getMainCarrier();
  const obj = require(7538) /* getMainCarrier */;
  require(7538) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
