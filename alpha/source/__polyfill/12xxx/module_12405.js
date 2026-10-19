// Module ID: 12405
// Function ID: 12406
// Dependencies: [12404, 12406]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12405
import _mod12404 from "module_12404" /* 12404 */;

let tmp;
const _mod12406 = tmp(12406);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12404;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12406;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12404;
  const mainCarrier = obj.getMainCarrier();
  _mod12404.getSentryCarrier(mainCarrier).acs = acs;
  _mod12404;
};
