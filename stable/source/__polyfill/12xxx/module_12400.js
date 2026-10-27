// Module ID: 12400
// Function ID: 12401
// Dependencies: [12399, 12401]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12400
import _mod12399 from "module_12399" /* 12399 */;

let tmp;
const _mod12401 = tmp(12401);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12399;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12401;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12399;
  const mainCarrier = obj.getMainCarrier();
  _mod12399.getSentryCarrier(mainCarrier).acs = acs;
  _mod12399;
};
