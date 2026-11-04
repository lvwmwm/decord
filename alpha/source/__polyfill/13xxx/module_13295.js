// Module ID: 13295
// Function ID: 13296
// Dependencies: [13279]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13295
import _mod13279 from "module_13279" /* 13279 */;

const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod13279;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
}
