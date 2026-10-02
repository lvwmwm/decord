// Module ID: 999
// Function ID: 1000
// Dependencies: [694]
// Exports: convertSpanToTransaction, isRootSpan, isSentrySpan, setEndTimeValue

// Module 999
import _mod694 from "module_694" /* 694 */;


export const isSentrySpan = function isSentrySpan(c4) {
  return c4 instanceof _mod694.SentrySpan;
};
export const isRootSpan = function isRootSpan(activeSpan) {
  const obj = _mod694;
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
