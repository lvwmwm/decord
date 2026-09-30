// Module ID: 12536
// Function ID: 12537
// Dependencies: [12520]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12536
import _mod12520 from "module_12520" /* 12520 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12520.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
