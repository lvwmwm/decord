// Module ID: 758
// Function ID: 759
// Name: _getTraceInfoFromScope
// Dependencies: [725, 696, 734]
// Exports: _getTraceInfoFromScope

// Module 758 (_getTraceInfoFromScope)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 696 */;
import _mod725 from "module_725" /* 725 */;
import freezeDscOnSpan from "freezeDscOnSpan" /* 734 */;

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
    let obj = require("module_725");
    withScopeResult = obj.withScope(arg1, () => {
      let dynamicSamplingContextFromSpan;
      let spanToTraceContextResult;
      const obj = TRACE_FLAG_NONE;
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const tmpResult = TRACE_FLAG_NONE;
        spanToTraceContextResult = tmpResult.spanToTraceContext(activeSpan);
      } else {
        const tmpResult3 = _mod725;
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
