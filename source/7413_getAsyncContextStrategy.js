// Module ID: 7413
// Function ID: 7414
// Name: getAsyncContextStrategy
// Dependencies: [7412, 7414]

// Module 7413 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7412) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7414) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(7414) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7412) /* getMainCarrier */.getMainCarrier();
  const obj = require(7412) /* getMainCarrier */;
  require(7412) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
