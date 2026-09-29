// Module ID: 12503
// Function ID: 12504
// Dependencies: [12502, 12504]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12503
import _mod12502 from "module_12502" /* 12502 */;
import _mod12504 from "module_12504" /* 12504 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod12502.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12504.getStackAsyncContextStrategy();
    const tmpResult = _mod12504;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12502.getMainCarrier();
  _mod12502.getSentryCarrier(mainCarrier).acs = acs;
};
