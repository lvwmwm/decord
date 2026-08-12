// Module ID: 7517
// Function ID: 7518
// Name: _getSpanForScope
// Dependencies: [7501]

// Module 7517 (_getSpanForScope)
const require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";
arg5._getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = require(7501) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
    const obj = require(7501) /* addNonEnumerableProperty */;
  } else {
    delete tmp2[tmp];
  }
};
