// Module ID: 11230
// Function ID: 11231
// Dependencies: [11214]
// Exports: _getSpanForScope, _setSpanForScope

// Module 11230
import _mod11214 from "module_11214" /* 11214 */;

const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod11214;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
