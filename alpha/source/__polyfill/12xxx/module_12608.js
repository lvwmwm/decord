// Module ID: 12608
// Function ID: 12609
// Dependencies: [12607, 12609]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12608
import _mod12607 from "module_12607" /* 12607 */;

let tmp;
const _mod12609 = tmp(12609);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12607;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12609;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12607;
  const mainCarrier = obj.getMainCarrier();
  _mod12607.getSentryCarrier(mainCarrier).acs = acs;
  _mod12607;
};
