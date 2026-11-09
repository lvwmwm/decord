// Module ID: 13300
// Function ID: 13301
// Dependencies: [13284]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13300
import _mod13284 from "module_13284" /* 13284 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13284;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
