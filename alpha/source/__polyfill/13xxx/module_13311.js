// Module ID: 13311
// Function ID: 13312
// Dependencies: [13310, 13312]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13311
import _mod13310 from "module_13310" /* 13310 */;

let tmp;
const _mod13312 = tmp(13312);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13310;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13312;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13310;
  const mainCarrier = obj.getMainCarrier();
  _mod13310.getSentryCarrier(mainCarrier).acs = acs;
  _mod13310;
}
