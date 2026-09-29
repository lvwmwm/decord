// Module ID: 12506
// Function ID: 12507
// Dependencies: [12490]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12506
import _mod12490 from "module_12490" /* 12490 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12490.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
