// Module ID: 13303
// Function ID: 13304
// Dependencies: [13287]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13303
import _mod13287 from "module_13287" /* 13287 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13287;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
