// Module ID: 12442
// Function ID: 12443
// Dependencies: [12441, 12443]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12442
import _mod12441 from "module_12441" /* 12441 */;

let tmp;
const _mod12443 = tmp(12443);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12441;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12443;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12441;
  const mainCarrier = obj.getMainCarrier();
  _mod12441.getSentryCarrier(mainCarrier).acs = acs;
  _mod12441;
};
