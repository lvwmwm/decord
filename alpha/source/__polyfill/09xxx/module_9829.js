// Module ID: 9829
// Function ID: 9830
// Dependencies: [9828, 9830]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 9829
import _mod9828 from "module_9828" /* 9828 */;

let tmp;
const _mod9830 = tmp(9830);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod9828;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod9830;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod9828;
  const mainCarrier = obj.getMainCarrier();
  _mod9828.getSentryCarrier(mainCarrier).acs = acs;
  _mod9828;
}
