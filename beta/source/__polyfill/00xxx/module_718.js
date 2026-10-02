// Module ID: 718
// Function ID: 719
// Dependencies: [702, 719]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 718
import _mod702 from "module_702" /* 702 */;

let tmp;
const AsyncContextStack = tmp(719);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod702;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = AsyncContextStack;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod702;
  const mainCarrier = obj.getMainCarrier();
  _mod702.getSentryCarrier(mainCarrier).acs = acs;
  _mod702;
};
