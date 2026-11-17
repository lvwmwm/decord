// Module ID: 9832
// Function ID: 9833
// Dependencies: [9816]
// Exports: _getSpanForScope, _setSpanForScope

// Module 9832
import _mod9816 from "module_9816" /* 9816 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod9816;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
