// Module ID: 987
// Function ID: 988
// Dependencies: [682]
// Exports: convertSpanToTransaction, isRootSpan, isSentrySpan, setEndTimeValue

// Module 987
import _mod682 from "module_682" /* 682 */;


export const isSentrySpan = function isSentrySpan(c4) {
  return c4 instanceof _mod682.SentrySpan;
};
export const isRootSpan = function isRootSpan(activeSpan) {
  const obj = _mod682;
  return activeSpan === obj.getRootSpan(activeSpan);
};
export const setEndTimeValue = function setEndTimeValue(arg0, _endTime) {
  arg0._endTime = _endTime;
};
export const convertSpanToTransaction = function convertSpanToTransaction(_convertSpanToTransaction) {
  _convertSpanToTransaction = _convertSpanToTransaction._convertSpanToTransaction;
  let callResult;
  if (null !== _convertSpanToTransaction) {
    if (undefined !== _convertSpanToTransaction) {
      callResult = _convertSpanToTransaction.call(_convertSpanToTransaction);
    }
  }
  return callResult;
};
