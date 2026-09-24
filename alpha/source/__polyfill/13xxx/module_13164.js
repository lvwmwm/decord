// Module ID: 13164
// Function ID: 13165
// Dependencies: [13163, 13165]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13164
import _mod13163 from "module_13163" /* 13163 */;
import _mod13165 from "module_13165" /* 13165 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod13163.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13165.getStackAsyncContextStrategy();
    const tmpResult = _mod13165;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13163.getMainCarrier();
  _mod13163.getSentryCarrier(mainCarrier).acs = acs;
};
