// Module ID: 13023
// Function ID: 13024
// Dependencies: [13022, 13024]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13023
import _mod13022 from "module_13022" /* 13022 */;

let tmp;
const _mod13024 = tmp(13024);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13022;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13024;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13022;
  const mainCarrier = obj.getMainCarrier();
  _mod13022.getSentryCarrier(mainCarrier).acs = acs;
  _mod13022;
}
