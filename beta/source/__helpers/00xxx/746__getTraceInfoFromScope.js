// Module ID: 746
// Function ID: 747
// Name: _getTraceInfoFromScope
// Dependencies: [713, 684, 722]
// Exports: _getTraceInfoFromScope

// Module 746 (_getTraceInfoFromScope)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 684 */;
import _mod713 from "module_713" /* 713 */;
import freezeDscOnSpan from "freezeDscOnSpan" /* 722 */;

const require = globalThis.__r;
let _require, dependencyMap;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _getTraceInfoFromScope = function _getTraceInfoFromScope(arg0, arg1) {
  let closure_0;
  let closure_1;
  let withScopeResult;
  _require = arg0;
  dependencyMap = arg1;
  if (dependencyMap) {
    let obj = require("module_713");
    withScopeResult = obj.withScope(arg1, () => {
      let dynamicSamplingContextFromSpan;
      let spanToTraceContextResult;
      const obj = TRACE_FLAG_NONE;
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const tmpResult = TRACE_FLAG_NONE;
        spanToTraceContextResult = tmpResult.spanToTraceContext(activeSpan);
      } else {
        const tmpResult3 = _mod713;
        spanToTraceContextResult = tmpResult3.getTraceContextFromScope(closure_1);
      }
      const tmpResult4 = freezeDscOnSpan;
      if (activeSpan) {
        dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromScope(closure_0, closure_1);
      }
      const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
      return items;
    });
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};
