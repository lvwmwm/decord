// Module ID: 13061
// Function ID: 13062
// Dependencies: [13045]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13061
import _mod13045 from "module_13045" /* 13045 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13045;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
