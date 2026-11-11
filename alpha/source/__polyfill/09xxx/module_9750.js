// Module ID: 9750
// Function ID: 9751
// Dependencies: [9749, 9751]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 9750
import _mod9749 from "module_9749" /* 9749 */;

let tmp;
const _mod9751 = tmp(9751);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod9749;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod9751;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod9749;
  const mainCarrier = obj.getMainCarrier();
  _mod9749.getSentryCarrier(mainCarrier).acs = acs;
  _mod9749;
}
