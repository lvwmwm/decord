// Module ID: 12952
// Function ID: 12953
// Dependencies: [12936]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12952
import _mod12936 from "module_12936" /* 12936 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12936.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
