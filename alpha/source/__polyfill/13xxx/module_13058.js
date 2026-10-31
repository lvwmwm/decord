// Module ID: 13058
// Function ID: 13059
// Dependencies: [13057, 13059]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13058
import _mod13057 from "module_13057" /* 13057 */;

let tmp;
const _mod13059 = tmp(13059);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13057;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13059;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13057;
  const mainCarrier = obj.getMainCarrier();
  _mod13057.getSentryCarrier(mainCarrier).acs = acs;
  _mod13057;
}
