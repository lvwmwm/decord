// Module ID: 12330
// Function ID: 12331
// Dependencies: [12329, 12331]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12330
import _mod12329 from "module_12329" /* 12329 */;

let tmp;
const _mod12331 = tmp(12331);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12329;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12331;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12329;
  const mainCarrier = obj.getMainCarrier();
  _mod12329.getSentryCarrier(mainCarrier).acs = acs;
  _mod12329;
};
