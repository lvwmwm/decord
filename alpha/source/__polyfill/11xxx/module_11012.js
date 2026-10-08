// Module ID: 11012
// Function ID: 11013
// Dependencies: [11011, 11013]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 11012
import _mod11011 from "module_11011" /* 11011 */;

let tmp;
const _mod11013 = tmp(11013);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod11011;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod11013;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod11011;
  const mainCarrier = obj.getMainCarrier();
  _mod11011.getSentryCarrier(mainCarrier).acs = acs;
  _mod11011;
};
