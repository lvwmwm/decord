// Module ID: 11229
// Function ID: 11230
// Dependencies: [11228, 11230]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 11229
import _mod11228 from "module_11228" /* 11228 */;

let tmp;
const _mod11230 = tmp(11230);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod11228;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod11230;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod11228;
  const mainCarrier = obj.getMainCarrier();
  _mod11228.getSentryCarrier(mainCarrier).acs = acs;
  _mod11228;
};
