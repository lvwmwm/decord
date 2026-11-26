// Module ID: 9816
// Function ID: 9817
// Dependencies: [9815, 9817]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 9816
import _mod9815 from "module_9815" /* 9815 */;

let tmp;
const _mod9817 = tmp(9817);

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod9815;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod9817;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod9815;
  const mainCarrier = obj.getMainCarrier();
  _mod9815.getSentryCarrier(mainCarrier).acs = acs;
  _mod9815;
}
