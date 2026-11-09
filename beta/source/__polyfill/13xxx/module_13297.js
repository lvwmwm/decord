// Module ID: 13297
// Function ID: 13298
// Dependencies: [13296, 13298]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13297
import _mod13296 from "module_13296" /* 13296 */;

let tmp;
const _mod13298 = tmp(13298);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13296;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13298;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13296;
  const mainCarrier = obj.getMainCarrier();
  _mod13296.getSentryCarrier(mainCarrier).acs = acs;
  _mod13296;
}
