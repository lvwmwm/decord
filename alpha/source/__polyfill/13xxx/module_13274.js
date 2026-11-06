// Module ID: 13274
// Function ID: 13275
// Dependencies: [13273, 13275]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13274
import _mod13273 from "module_13273" /* 13273 */;

let tmp;
const _mod13275 = tmp(13275);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13273;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13275;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13273;
  const mainCarrier = obj.getMainCarrier();
  _mod13273.getSentryCarrier(mainCarrier).acs = acs;
  _mod13273;
}
