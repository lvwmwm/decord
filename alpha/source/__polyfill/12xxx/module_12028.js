// Module ID: 12028
// Function ID: 12029
// Dependencies: [12012]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12028
import _mod12012 from "module_12012" /* 12012 */;

const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod12012;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
