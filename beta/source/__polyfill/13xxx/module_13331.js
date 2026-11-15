// Module ID: 13331
// Function ID: 13332
// Dependencies: [13315]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13331
import _mod13315 from "module_13315" /* 13315 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13315;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
