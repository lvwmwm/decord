// Module ID: 710
// Function ID: 711
// Dependencies: [694, 711]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 710
import _mod694 from "module_694" /* 694 */;
import _mod711 from "module_711" /* 711 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod694.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod711.getStackAsyncContextStrategy();
    const tmpResult = _mod711;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod694.getMainCarrier();
  _mod694.getSentryCarrier(mainCarrier).acs = acs;
};
