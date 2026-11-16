// Module ID: 13329
// Function ID: 13330
// Dependencies: [13328, 13330]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13329
import _mod13328 from "module_13328" /* 13328 */;

let tmp;
const _mod13330 = tmp(13330);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13328;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13330;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13328;
  const mainCarrier = obj.getMainCarrier();
  _mod13328.getSentryCarrier(mainCarrier).acs = acs;
  _mod13328;
}
