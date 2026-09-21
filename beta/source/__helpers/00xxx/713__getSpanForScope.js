// Module ID: 713
// Function ID: 714
// Name: _getSpanForScope
// Dependencies: [691]
// Exports: _getSpanForScope, _setSpanForScope

// Module 713 (_getSpanForScope)
import _mod691 from "module_691" /* 691 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod691.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
