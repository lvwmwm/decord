// Module ID: 12872
// Function ID: 12873
// Dependencies: [12871, 12873]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12872
import _mod12871 from "module_12871" /* 12871 */;

let tmp;
const _mod12873 = tmp(12873);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12871;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12873;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod12871;
  const mainCarrier = obj.getMainCarrier();
  _mod12871.getSentryCarrier(mainCarrier).acs = acs;
  _mod12871;
}
