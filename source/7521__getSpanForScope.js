// Module ID: 7521
// Function ID: 7522
// Name: _getSpanForScope
// Dependencies: [7505]

// Module 7521 (_getSpanForScope)
const require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";
arg5._getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = require(7505) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
    const obj = require(7505) /* addNonEnumerableProperty */;
  } else {
    delete tmp2[tmp];
  }
};
