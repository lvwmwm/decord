// Module ID: 12547
// Function ID: 12548
// Dependencies: [12531]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12547
import _mod12531 from "module_12531" /* 12531 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12531.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
