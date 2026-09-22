// Module ID: 13073
// Function ID: 13074
// Dependencies: [13072, 13074]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13073
import _mod13072 from "module_13072" /* 13072 */;
import _mod13074 from "module_13074" /* 13074 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod13072.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13074.getStackAsyncContextStrategy();
    const tmpResult = _mod13074;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13072.getMainCarrier();
  _mod13072.getSentryCarrier(mainCarrier).acs = acs;
};
