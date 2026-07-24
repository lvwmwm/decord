// Module ID: 821
// Function ID: 9205
// Name: _getSpanForScope
// Dependencies: [799]

// Module 821 (_getSpanForScope)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._getSpanForScope = function _getSpanForScope(_sentrySpan) {
  return _sentrySpan._sentrySpan;
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = require(799) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, "_sentrySpan", arg1);
    const obj = require(799) /* addNonEnumerableProperty */;
  } else {
    delete tmp._sentrySpan;
  }
};
