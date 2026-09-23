// Module ID: 13158
// Function ID: 13159
// Dependencies: [13142]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13158
import _mod13142 from "module_13142" /* 13142 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod13142.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
