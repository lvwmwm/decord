// Module ID: 746
// Function ID: 747
// Name: _getTraceInfoFromScope
// Dependencies: [713, 684, 722]
// Exports: _getTraceInfoFromScope

// Module 746 (_getTraceInfoFromScope)
import spanToJSON from "spanToJSON" /* 684 */;
import _mod722 from "module_722" /* 722 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const _getTraceInfoFromScope = function _getTraceInfoFromScope(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  if (arg1) {
    let withScopeResult = require("module_713").withScope(arg1, () => {
      const activeSpan = spanToJSON.getActiveSpan();
      if (activeSpan) {
        let spanToTraceContextResult = tmp(684).spanToTraceContext(activeSpan);
        const tmpResult = tmp(684);
      } else {
        spanToTraceContextResult = tmp(713).getTraceContextFromScope(closure_1);
        const tmpResult3 = tmp(713);
      }
      const tmpResult4 = _mod722;
      if (activeSpan) {
        let dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromScope(closure_0, closure_1);
      }
      const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
      return items;
    });
    const obj = require("module_713");
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};
