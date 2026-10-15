// Module ID: 12297
// Function ID: 12298
// Dependencies: [12281]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12297
import _mod12281 from "module_12281" /* 12281 */;

const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod12281;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
