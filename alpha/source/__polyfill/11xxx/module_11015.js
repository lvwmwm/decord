// Module ID: 11015
// Function ID: 11016
// Dependencies: [10999]
// Exports: _getSpanForScope, _setSpanForScope

// Module 11015
import _mod10999 from "module_10999" /* 10999 */;

const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod10999;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
