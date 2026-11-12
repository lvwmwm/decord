// Module ID: 9749
// Function ID: 9750
// Dependencies: [9748, 9750]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 9749
import _mod9748 from "module_9748" /* 9748 */;

let tmp;
const _mod9750 = tmp(9750);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod9748;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod9750;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod9748;
  const mainCarrier = obj.getMainCarrier();
  _mod9748.getSentryCarrier(mainCarrier).acs = acs;
  _mod9748;
}
