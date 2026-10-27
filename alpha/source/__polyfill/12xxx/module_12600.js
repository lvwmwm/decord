// Module ID: 12600
// Function ID: 12601
// Dependencies: [12599, 12601]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12600
import _mod12599 from "module_12599" /* 12599 */;

let tmp;
const _mod12601 = tmp(12601);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12599;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12601;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12599;
  const mainCarrier = obj.getMainCarrier();
  _mod12599.getSentryCarrier(mainCarrier).acs = acs;
  _mod12599;
};
