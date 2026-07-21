// Module ID: 821
// Function ID: 9203
// Name: _getSpanForScope
// Dependencies: []

// Module 821 (_getSpanForScope)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
