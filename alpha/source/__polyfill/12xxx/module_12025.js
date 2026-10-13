// Module ID: 12025
// Function ID: 12026
// Dependencies: [12024, 12026]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12025
import _mod12024 from "module_12024" /* 12024 */;

let tmp;
const _mod12026 = tmp(12026);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12024;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12026;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12024;
  const mainCarrier = obj.getMainCarrier();
  _mod12024.getSentryCarrier(mainCarrier).acs = acs;
  _mod12024;
};
