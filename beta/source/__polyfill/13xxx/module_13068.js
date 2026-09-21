// Module ID: 13068
// Function ID: 13069
// Dependencies: [13067, 13069]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13068
import _mod13067 from "module_13067" /* 13067 */;
import _mod13069 from "module_13069" /* 13069 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod13067.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13069.getStackAsyncContextStrategy();
    const tmpResult = _mod13069;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13067.getMainCarrier();
  _mod13067.getSentryCarrier(mainCarrier).acs = acs;
};
