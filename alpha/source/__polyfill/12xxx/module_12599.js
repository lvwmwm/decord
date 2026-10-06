// Module ID: 12599
// Function ID: 12600
// Dependencies: [12598, 12600]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12599
import _mod12598 from "module_12598" /* 12598 */;

let tmp;
const _mod12600 = tmp(12600);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12598;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12600;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12598;
  const mainCarrier = obj.getMainCarrier();
  _mod12598.getSentryCarrier(mainCarrier).acs = acs;
  _mod12598;
};
