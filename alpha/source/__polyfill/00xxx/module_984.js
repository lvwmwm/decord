// Module ID: 984
// Function ID: 985
// Dependencies: [681]
// Exports: convertSpanToTransaction, isRootSpan, isSentrySpan, setEndTimeValue

// Module 984
import _mod681 from "module_681" /* 681 */;


export function isSentrySpan(c4) {
  return c4 instanceof _mod681.SentrySpan;
}
export function isRootSpan(activeSpan) {
  const obj = _mod681;
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
