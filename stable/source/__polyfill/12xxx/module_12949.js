// Module ID: 12949
// Function ID: 12950
// Dependencies: [12948, 12950]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12949
import _mod12948 from "module_12948" /* 12948 */;
import _mod12950 from "module_12950" /* 12950 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod12948.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12950.getStackAsyncContextStrategy();
    const tmpResult = _mod12950;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12948.getMainCarrier();
  _mod12948.getSentryCarrier(mainCarrier).acs = acs;
};
