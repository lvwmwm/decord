// Module ID: 13212
// Function ID: 13213
// Dependencies: [13196]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13212
import _mod13196 from "module_13196" /* 13196 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13196;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
