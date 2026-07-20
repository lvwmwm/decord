// Module ID: 7248
// Function ID: 58406
// Name: _getSpanForScope
// Dependencies: []

// Module 7248 (_getSpanForScope)
arg5._getSpanForScope = function _getSpanForScope(_sentrySpan) {
  return _sentrySpan._sentrySpan;
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = arg1(arg6[0]).addNonEnumerableProperty(arg0, "_sentrySpan", arg1);
    const obj = arg1(arg6[0]);
  } else {
    delete r4._sentrySpan;
  }
};
