// Module ID: 13072
// Function ID: 13073
// Dependencies: [13056]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13072
import _mod13056 from "module_13056" /* 13056 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod13056.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
