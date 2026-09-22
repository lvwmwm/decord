// Module ID: 13076
// Function ID: 13077
// Dependencies: [13060]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13076
import _mod13060 from "module_13060" /* 13060 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod13060.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
