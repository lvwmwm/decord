// Module ID: 13296
// Function ID: 13297
// Dependencies: [13280]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13296
import _mod13280 from "module_13280" /* 13280 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13280;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
