// Module ID: 720
// Function ID: 721
// Name: _getSpanForScope
// Dependencies: [698]
// Exports: _getSpanForScope, _setSpanForScope

// Module 720 (_getSpanForScope)
import _mod698 from "module_698" /* 698 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod698;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
