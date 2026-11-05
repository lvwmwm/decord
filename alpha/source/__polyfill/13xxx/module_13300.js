// Module ID: 13300
// Function ID: 13301
// Dependencies: [13299, 13301]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13300
import _mod13299 from "module_13299" /* 13299 */;

let tmp;
const _mod13301 = tmp(13301);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13299;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13301;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13299;
  const mainCarrier = obj.getMainCarrier();
  _mod13299.getSentryCarrier(mainCarrier).acs = acs;
  _mod13299;
}
