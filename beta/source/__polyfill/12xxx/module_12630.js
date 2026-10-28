// Module ID: 12630
// Function ID: 12631
// Dependencies: [12629, 12631]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12630
import _mod12629 from "module_12629" /* 12629 */;

let tmp;
const _mod12631 = tmp(12631);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12629;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12631;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12629;
  const mainCarrier = obj.getMainCarrier();
  _mod12629.getSentryCarrier(mainCarrier).acs = acs;
  _mod12629;
};
