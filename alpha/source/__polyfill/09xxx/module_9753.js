// Module ID: 9753
// Function ID: 9754
// Dependencies: [9737]
// Exports: _getSpanForScope, _setSpanForScope

// Module 9753
import _mod9737 from "module_9737" /* 9737 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod9737;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
