// Module ID: 12498
// Function ID: 12499
// Dependencies: [12497, 12499]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12498
import _mod12497 from "module_12497" /* 12497 */;

let tmp;
const _mod12499 = tmp(12499);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12497;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12499;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12497;
  const mainCarrier = obj.getMainCarrier();
  _mod12497.getSentryCarrier(mainCarrier).acs = acs;
  _mod12497;
};
