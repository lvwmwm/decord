// Module ID: 7542
// Function ID: 7543
// Name: _getSpanForScope
// Dependencies: [7526]

// Module 7542 (_getSpanForScope)
const require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";
arg5._getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = require(7526) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
    const obj = require(7526) /* addNonEnumerableProperty */;
  } else {
    delete tmp2[tmp];
  }
};
