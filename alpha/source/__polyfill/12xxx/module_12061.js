// Module ID: 12061
// Function ID: 12062
// Dependencies: [12060, 12062]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12061
import _mod12060 from "module_12060" /* 12060 */;

let tmp;
const _mod12062 = tmp(12062);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12060;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12062;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12060;
  const mainCarrier = obj.getMainCarrier();
  _mod12060.getSentryCarrier(mainCarrier).acs = acs;
  _mod12060;
};
