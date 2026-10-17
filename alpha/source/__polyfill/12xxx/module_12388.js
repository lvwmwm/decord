// Module ID: 12388
// Function ID: 12389
// Dependencies: [12387, 12389]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12388
import _mod12387 from "module_12387" /* 12387 */;

let tmp;
const _mod12389 = tmp(12389);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12387;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12389;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12387;
  const mainCarrier = obj.getMainCarrier();
  _mod12387.getSentryCarrier(mainCarrier).acs = acs;
  _mod12387;
};
