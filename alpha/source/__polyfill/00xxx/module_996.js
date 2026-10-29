// Module ID: 996
// Function ID: 997
// Dependencies: [693]
// Exports: convertSpanToTransaction, isRootSpan, isSentrySpan, setEndTimeValue

// Module 996
import _mod693 from "module_693" /* 693 */;


export function isSentrySpan(c4) {
  return c4 instanceof _mod693.SentrySpan;
}
export function isRootSpan(activeSpan) {
  const obj = _mod693;
  return activeSpan === obj.getRootSpan(activeSpan);
}
export function setEndTimeValue(arg0, _endTime) {
  arg0._endTime = _endTime;
}
export function convertSpanToTransaction(_convertSpanToTransaction) {
  _convertSpanToTransaction = _convertSpanToTransaction._convertSpanToTransaction;
  let callResult;
  if (null !== _convertSpanToTransaction) {
    if (undefined !== _convertSpanToTransaction) {
      callResult = _convertSpanToTransaction.call(_convertSpanToTransaction);
    }
  }
  return callResult;
}
