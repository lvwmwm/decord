// Module ID: 13167
// Function ID: 13168
// Dependencies: [13151]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13167
import _mod13151 from "module_13151" /* 13151 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod13151.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
