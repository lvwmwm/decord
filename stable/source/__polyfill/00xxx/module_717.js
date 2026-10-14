// Module ID: 717
// Function ID: 718
// Dependencies: [701, 718]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 717
import _mod701 from "module_701" /* 701 */;

let tmp;
const AsyncContextStack = tmp(718);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod701;
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
  const obj = _mod701;
  const mainCarrier = obj.getMainCarrier();
  _mod701.getSentryCarrier(mainCarrier).acs = acs;
  _mod701;
};
