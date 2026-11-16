// Module ID: 9819
// Function ID: 9820
// Dependencies: [9803]
// Exports: _getSpanForScope, _setSpanForScope

// Module 9819
import _mod9803 from "module_9803" /* 9803 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod9803;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
