// Module ID: 12544
// Function ID: 12545
// Dependencies: [12543, 12545]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12544
import _mod12543 from "module_12543" /* 12543 */;
import _mod12545 from "module_12545" /* 12545 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod12543.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12545.getStackAsyncContextStrategy();
    const tmpResult = _mod12545;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12543.getMainCarrier();
  _mod12543.getSentryCarrier(mainCarrier).acs = acs;
};
