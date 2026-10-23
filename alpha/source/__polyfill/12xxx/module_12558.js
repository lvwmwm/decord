// Module ID: 12558
// Function ID: 12559
// Dependencies: [12557, 12559]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12558
import _mod12557 from "module_12557" /* 12557 */;

let tmp;
const _mod12559 = tmp(12559);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12557;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12559;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12557;
  const mainCarrier = obj.getMainCarrier();
  _mod12557.getSentryCarrier(mainCarrier).acs = acs;
  _mod12557;
};
