// Module ID: 13293
// Function ID: 13294
// Dependencies: [13292, 13294]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13293
import _mod13292 from "module_13292" /* 13292 */;

let tmp;
const _mod13294 = tmp(13294);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13292;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13294;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13292;
  const mainCarrier = obj.getMainCarrier();
  _mod13292.getSentryCarrier(mainCarrier).acs = acs;
  _mod13292;
}
