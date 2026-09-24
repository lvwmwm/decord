// Module ID: 13107
// Function ID: 13108
// Dependencies: [13091]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13107
import _mod13091 from "module_13091" /* 13091 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod13091.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
