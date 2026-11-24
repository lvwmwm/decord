// Module ID: 708
// Function ID: 709
// Name: _getSpanForScope
// Dependencies: [686]
// Exports: _getSpanForScope, _setSpanForScope

// Module 708 (_getSpanForScope)
import _mod686 from "module_686" /* 686 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(currentScope) {
  return currentScope[_sentrySpan];
}
export function _setSpanForScope(currentScope, sentryNonRecordingSpan) {
  const tmp2 = sentryNonRecordingSpan;
  if (tmp2) {
    const obj = _mod686;
    const result = obj.addNonEnumerableProperty(currentScope, _sentrySpan, sentryNonRecordingSpan);
  } else {
    delete tmp[_sentrySpan];
  }
}
