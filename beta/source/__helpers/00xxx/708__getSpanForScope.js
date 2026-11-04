// Module ID: 708
// Function ID: 709
// Name: _getSpanForScope
// Dependencies: [686]
// Exports: _getSpanForScope, _setSpanForScope

// Module 708 (_getSpanForScope)
import _mod686 from "module_686" /* 686 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod686;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
