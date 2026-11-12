// Module ID: 13332
// Function ID: 13333
// Dependencies: [13316]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13332
import _mod13316 from "module_13316" /* 13316 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13316;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
