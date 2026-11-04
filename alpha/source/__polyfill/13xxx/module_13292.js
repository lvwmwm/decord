// Module ID: 13292
// Function ID: 13293
// Dependencies: [13291, 13293]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13292
import _mod13291 from "module_13291" /* 13291 */;

let tmp;
const _mod13293 = tmp(13293);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13291;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13293;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13291;
  const mainCarrier = obj.getMainCarrier();
  _mod13291.getSentryCarrier(mainCarrier).acs = acs;
  _mod13291;
}
