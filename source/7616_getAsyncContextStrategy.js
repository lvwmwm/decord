// Module ID: 7616
// Function ID: 7617
// Name: getAsyncContextStrategy
// Dependencies: [7615, 7617]

// Module 7616 (getAsyncContextStrategy)
import getMainCarrier from "getMainCarrier" /* 7615 */;
import withScope from "withScope" /* 7617 */;

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
