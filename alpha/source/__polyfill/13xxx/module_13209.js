// Module ID: 13209
// Function ID: 13210
// Dependencies: [13208, 13210]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13209
import _mod13208 from "module_13208" /* 13208 */;

let tmp;
const _mod13210 = tmp(13210);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13208;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13210;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13208;
  const mainCarrier = obj.getMainCarrier();
  _mod13208.getSentryCarrier(mainCarrier).acs = acs;
  _mod13208;
}
