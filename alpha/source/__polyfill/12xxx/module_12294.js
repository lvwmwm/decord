// Module ID: 12294
// Function ID: 12295
// Dependencies: [12293, 12295]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12294
import _mod12293 from "module_12293" /* 12293 */;

let tmp;
const _mod12295 = tmp(12295);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12293;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12295;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12293;
  const mainCarrier = obj.getMainCarrier();
  _mod12293.getSentryCarrier(mainCarrier).acs = acs;
  _mod12293;
};
