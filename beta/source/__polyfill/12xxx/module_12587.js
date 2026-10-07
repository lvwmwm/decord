// Module ID: 12587
// Function ID: 12588
// Dependencies: [12571]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12587
import _mod12571 from "module_12571" /* 12571 */;

const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod12571;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
