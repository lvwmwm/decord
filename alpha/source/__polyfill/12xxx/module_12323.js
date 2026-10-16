// Module ID: 12323
// Function ID: 12324
// Dependencies: [12322, 12324]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12323
import _mod12322 from "module_12322" /* 12322 */;

let tmp;
const _mod12324 = tmp(12324);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12322;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12324;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12322;
  const mainCarrier = obj.getMainCarrier();
  _mod12322.getSentryCarrier(mainCarrier).acs = acs;
  _mod12322;
};
