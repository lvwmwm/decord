// Module ID: 13098
// Function ID: 13099
// Dependencies: [13097, 13099]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13098
import _mod13097 from "module_13097" /* 13097 */;
import _mod13099 from "module_13099" /* 13099 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod13097.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13099.getStackAsyncContextStrategy();
    const tmpResult = _mod13099;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13097.getMainCarrier();
  _mod13097.getSentryCarrier(mainCarrier).acs = acs;
};
