// Module ID: 1098
// Function ID: 12564
// Name: isSentrySpan
// Dependencies: [794]

// Module 1098 (isSentrySpan)
const require = arg1;
const dependencyMap = arg6;
arg5.isSentrySpan = function isSentrySpan(c2) {
  return c2 instanceof require(794) /* registerSpanErrorInstrumentation */.SentrySpan;
};
arg5.isRootSpan = function isRootSpan(outer1_0) {
  return outer1_0 === require(794) /* registerSpanErrorInstrumentation */.getRootSpan(outer1_0);
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
