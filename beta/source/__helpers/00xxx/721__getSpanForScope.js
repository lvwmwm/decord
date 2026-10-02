// Module ID: 721
// Function ID: 722
// Name: _getSpanForScope
// Dependencies: [699]
// Exports: _getSpanForScope, _setSpanForScope

// Module 721 (_getSpanForScope)
import _mod699 from "module_699" /* 699 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod699;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
