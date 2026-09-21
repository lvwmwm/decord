// Module ID: 13071
// Function ID: 13072
// Dependencies: [13055]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13071
import _mod13055 from "module_13055" /* 13055 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod13055.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
