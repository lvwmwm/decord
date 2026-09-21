// Module ID: 991
// Function ID: 992
// Dependencies: [686]
// Exports: convertSpanToTransaction, isRootSpan, isSentrySpan, setEndTimeValue

// Module 991
import _mod686 from "module_686" /* 686 */;

require = arg1;
const dependencyMap = arg6;

export const isSentrySpan = function isSentrySpan(c4) {
  return c4 instanceof _mod686.SentrySpan;
};
export const isRootSpan = function isRootSpan(activeSpan) {
  return activeSpan === _mod686.getRootSpan(activeSpan);
};
export const setEndTimeValue = function setEndTimeValue(arg0, _endTime) {
  arg0._endTime = _endTime;
};
export const convertSpanToTransaction = function convertSpanToTransaction(_convertSpanToTransaction) {
  _convertSpanToTransaction = _convertSpanToTransaction._convertSpanToTransaction;
  if (null !== _convertSpanToTransaction) {
    if (undefined !== _convertSpanToTransaction) {
      const call = _convertSpanToTransaction.call;
      typeof call === "unknown" ? _convertSpanToTransaction() : call(_convertSpanToTransaction);
    }
  }
};
