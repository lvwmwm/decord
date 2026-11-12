// Module ID: 9752
// Function ID: 9753
// Dependencies: [9736]
// Exports: _getSpanForScope, _setSpanForScope

// Module 9752
import _mod9736 from "module_9736" /* 9736 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod9736;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
