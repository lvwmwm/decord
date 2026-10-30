// Module ID: 13026
// Function ID: 13027
// Dependencies: [13010]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13026
import _mod13010 from "module_13010" /* 13010 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13010;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
