// Module ID: 12598
// Function ID: 12599
// Dependencies: [12597, 12599]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12598
import _mod12597 from "module_12597" /* 12597 */;

let tmp;
const _mod12599 = tmp(12599);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12597;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12599;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12597;
  const mainCarrier = obj.getMainCarrier();
  _mod12597.getSentryCarrier(mainCarrier).acs = acs;
  _mod12597;
};
