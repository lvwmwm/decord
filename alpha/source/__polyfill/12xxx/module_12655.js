// Module ID: 12655
// Function ID: 12656
// Dependencies: [12654, 12656]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12655
import _mod12654 from "module_12654" /* 12654 */;

let tmp;
const _mod12656 = tmp(12656);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12654;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12656;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12654;
  const mainCarrier = obj.getMainCarrier();
  _mod12654.getSentryCarrier(mainCarrier).acs = acs;
  _mod12654;
};
