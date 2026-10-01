// Module ID: 709
// Function ID: 710
// Name: _getSpanForScope
// Dependencies: [687]
// Exports: _getSpanForScope, _setSpanForScope

// Module 709 (_getSpanForScope)
import _mod687 from "module_687" /* 687 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod687;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
