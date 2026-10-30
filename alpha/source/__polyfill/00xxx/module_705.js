// Module ID: 705
// Function ID: 706
// Dependencies: [689, 706]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 705
import _mod689 from "module_689" /* 689 */;

let tmp;
const AsyncContextStack = tmp(706);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod689;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = AsyncContextStack;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const obj = _mod689;
  const mainCarrier = obj.getMainCarrier();
  _mod689.getSentryCarrier(mainCarrier).acs = acs;
  _mod689;
}
