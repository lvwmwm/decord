// Module ID: 12748
// Function ID: 12749
// Name: getAsyncContextStrategy
// Dependencies: [12747, 12749]

// Module 12748 (getAsyncContextStrategy)
import getMainCarrier from "getMainCarrier" /* 12747 */;
import withScope from "withScope" /* 12749 */;

require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = getMainCarrier.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = withScope.getStackAsyncContextStrategy();
    const tmpResult = withScope;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = getMainCarrier.getMainCarrier();
  const obj = getMainCarrier;
  getMainCarrier.getSentryCarrier(mainCarrier).acs = acs;
};
