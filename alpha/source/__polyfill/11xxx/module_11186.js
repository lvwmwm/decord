// Module ID: 11186
// Function ID: 11187
// Dependencies: [11185, 11187]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 11186
import _mod11185 from "module_11185" /* 11185 */;

let tmp;
const _mod11187 = tmp(11187);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod11185;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod11187;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod11185;
  const mainCarrier = obj.getMainCarrier();
  _mod11185.getSentryCarrier(mainCarrier).acs = acs;
  _mod11185;
};
