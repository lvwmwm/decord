// Module ID: 12528
// Function ID: 12529
// Dependencies: [12527, 12529]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12528
import _mod12527 from "module_12527" /* 12527 */;

let tmp;
const _mod12529 = tmp(12529);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12527;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12529;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12527;
  const mainCarrier = obj.getMainCarrier();
  _mod12527.getSentryCarrier(mainCarrier).acs = acs;
  _mod12527;
};
