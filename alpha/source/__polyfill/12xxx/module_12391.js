// Module ID: 12391
// Function ID: 12392
// Dependencies: [12375]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12391
import _mod12375 from "module_12375" /* 12375 */;

const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod12375;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
