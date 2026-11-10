// Module ID: 13073
// Function ID: 13074
// Dependencies: [13072, 13074]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13073
import _mod13072 from "module_13072" /* 13072 */;

let tmp;
const _mod13074 = tmp(13074);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod13072;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod13074;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod13072;
  const mainCarrier = obj.getMainCarrier();
  _mod13072.getSentryCarrier(mainCarrier).acs = acs;
  _mod13072;
}
