// Module ID: 12584
// Function ID: 12585
// Dependencies: [12583, 12585]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12584
import _mod12583 from "module_12583" /* 12583 */;

let tmp;
const _mod12585 = tmp(12585);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12583;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12585;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12583;
  const mainCarrier = obj.getMainCarrier();
  _mod12583.getSentryCarrier(mainCarrier).acs = acs;
  _mod12583;
};
