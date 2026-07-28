// Module ID: 6369
// Function ID: 57045
// Name: _getSpanForScope
// Dependencies: [6353]

// Module 6369 (_getSpanForScope)
const require = arg1;
const dependencyMap = arg6;
arg5._getSpanForScope = function _getSpanForScope(_sentrySpan) {
  return _sentrySpan._sentrySpan;
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = require(6353) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, "_sentrySpan", arg1);
    const obj = require(6353) /* addNonEnumerableProperty */;
  } else {
    delete tmp._sentrySpan;
  }
};
