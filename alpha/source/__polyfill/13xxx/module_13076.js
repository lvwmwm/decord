// Module ID: 13076
// Function ID: 13077
// Dependencies: [13060]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13076
import _mod13060 from "module_13060" /* 13060 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13060;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
