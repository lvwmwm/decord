// Module ID: 12332
// Function ID: 12333
// Dependencies: [12331, 12333]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12332
import _mod12331 from "module_12331" /* 12331 */;

let tmp;
const _mod12333 = tmp(12333);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12331;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12333;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12331;
  const mainCarrier = obj.getMainCarrier();
  _mod12331.getSentryCarrier(mainCarrier).acs = acs;
  _mod12331;
};
