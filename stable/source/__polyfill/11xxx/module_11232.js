// Module ID: 11232
// Function ID: 11233
// Dependencies: [11216]
// Exports: _getSpanForScope, _setSpanForScope

// Module 11232
import _mod11216 from "module_11216" /* 11216 */;

const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod11216;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
