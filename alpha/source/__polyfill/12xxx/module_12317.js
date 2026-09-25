// Module ID: 12317
// Function ID: 12318
// Dependencies: [12301]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12317
import _mod12301 from "module_12301" /* 12301 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12301.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
