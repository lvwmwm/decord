// Module ID: 12539
// Function ID: 12540
// Dependencies: [12538, 12540]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12539
import _mod12538 from "module_12538" /* 12538 */;

let tmp;
const _mod12540 = tmp(12540);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12538;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12540;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12538;
  const mainCarrier = obj.getMainCarrier();
  _mod12538.getSentryCarrier(mainCarrier).acs = acs;
  _mod12538;
};
