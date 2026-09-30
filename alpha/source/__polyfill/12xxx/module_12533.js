// Module ID: 12533
// Function ID: 12534
// Dependencies: [12532, 12534]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12533
import _mod12532 from "module_12532" /* 12532 */;
import _mod12534 from "module_12534" /* 12534 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod12532.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12534.getStackAsyncContextStrategy();
    const tmpResult = _mod12534;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12532.getMainCarrier();
  _mod12532.getSentryCarrier(mainCarrier).acs = acs;
};
