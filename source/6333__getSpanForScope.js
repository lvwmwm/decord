// Module ID: 6333
// Function ID: 56956
// Name: _getSpanForScope
// Dependencies: [6317]

// Module 6333 (_getSpanForScope)
const require = arg1;
const dependencyMap = arg6;
arg5._getSpanForScope = function _getSpanForScope(_sentrySpan) {
  return _sentrySpan._sentrySpan;
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = require(6317) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, "_sentrySpan", arg1);
    const obj = require(6317) /* addNonEnumerableProperty */;
  } else {
    delete tmp._sentrySpan;
  }
};
