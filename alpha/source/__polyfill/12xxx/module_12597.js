// Module ID: 12597
// Function ID: 12598
// Dependencies: [12596, 12598]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12597
import _mod12596 from "module_12596" /* 12596 */;

let tmp;
const _mod12598 = tmp(12598);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12596;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12598;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12596;
  const mainCarrier = obj.getMainCarrier();
  _mod12596.getSentryCarrier(mainCarrier).acs = acs;
  _mod12596;
};
