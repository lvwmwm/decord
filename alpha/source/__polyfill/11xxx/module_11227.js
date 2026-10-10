// Module ID: 11227
// Function ID: 11228
// Dependencies: [11226, 11228]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 11227
import _mod11226 from "module_11226" /* 11226 */;

let tmp;
const _mod11228 = tmp(11228);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod11226;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod11228;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod11226;
  const mainCarrier = obj.getMainCarrier();
  _mod11226.getSentryCarrier(mainCarrier).acs = acs;
  _mod11226;
};
