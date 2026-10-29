// Module ID: 12875
// Function ID: 12876
// Dependencies: [12859]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12875
import _mod12859 from "module_12859" /* 12859 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod12859;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
