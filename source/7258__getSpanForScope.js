// Module ID: 7258
// Function ID: 58474
// Name: _getSpanForScope
// Dependencies: [7242]

// Module 7258 (_getSpanForScope)
const require = arg1;
const dependencyMap = arg6;
arg5._getSpanForScope = function _getSpanForScope(_sentrySpan) {
  return _sentrySpan._sentrySpan;
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = require(7242) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, "_sentrySpan", arg1);
    const obj = require(7242) /* addNonEnumerableProperty */;
  } else {
    delete tmp._sentrySpan;
  }
};
