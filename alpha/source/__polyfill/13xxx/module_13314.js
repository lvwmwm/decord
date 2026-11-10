// Module ID: 13314
// Function ID: 13315
// Dependencies: [13298]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13314
import _mod13298 from "module_13298" /* 13298 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13298;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
