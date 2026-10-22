// Module ID: 12542
// Function ID: 12543
// Dependencies: [12526]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12542
import _mod12526 from "module_12526" /* 12526 */;

const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod12526;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
