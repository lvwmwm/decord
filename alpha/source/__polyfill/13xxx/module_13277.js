// Module ID: 13277
// Function ID: 13278
// Dependencies: [13261]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13277
import _mod13261 from "module_13261" /* 13261 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13261;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
