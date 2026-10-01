// Module ID: 706
// Function ID: 707
// Dependencies: [690, 707]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 706
import _mod690 from "module_690" /* 690 */;

let tmp;
const AsyncContextStack = tmp(707);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod690;
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
  const obj = _mod690;
  const mainCarrier = obj.getMainCarrier();
  _mod690.getSentryCarrier(mainCarrier).acs = acs;
  _mod690;
};
