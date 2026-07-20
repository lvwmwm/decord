// Module ID: 1098
// Function ID: 12559
// Name: isSentrySpan
// Dependencies: []

// Module 1098 (isSentrySpan)
arg5.isSentrySpan = function isSentrySpan(closure_2) {
  return closure_2 instanceof arg1(arg6[0]).SentrySpan;
};
arg5.isRootSpan = function isRootSpan(activeSpan) {
  return activeSpan === arg1(arg6[0]).getRootSpan(activeSpan);
};
arg5.setEndTimeValue = function setEndTimeValue(startInactiveSpanResult, _endTime) {
  startInactiveSpanResult._endTime = _endTime;
};
arg5.convertSpanToTransaction = function convertSpanToTransaction(startInactiveSpanResult) {
  const _convertSpanToTransaction = startInactiveSpanResult._convertSpanToTransaction;
  let callResult;
  if (null !== _convertSpanToTransaction) {
    if (undefined !== _convertSpanToTransaction) {
      callResult = _convertSpanToTransaction.call(startInactiveSpanResult);
    }
  }
  return callResult;
};
