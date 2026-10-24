// Module ID: 12592
// Function ID: 12593
// Dependencies: [12591, 12593]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12592
import _mod12591 from "module_12591" /* 12591 */;

let tmp;
const _mod12593 = tmp(12593);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12591;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12593;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12591;
  const mainCarrier = obj.getMainCarrier();
  _mod12591.getSentryCarrier(mainCarrier).acs = acs;
  _mod12591;
};
