// Module ID: 13328
// Function ID: 13329
// Dependencies: [13327, 13329]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13328
import _mod13327 from "module_13327" /* 13327 */;

let tmp;
const _mod13329 = tmp(13329);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13327;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13329;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13327;
  const mainCarrier = obj.getMainCarrier();
  _mod13327.getSentryCarrier(mainCarrier).acs = acs;
  _mod13327;
}
