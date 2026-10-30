// Module ID: 745
// Function ID: 746
// Name: _getTraceInfoFromScope
// Dependencies: [712, 683, 721]
// Exports: _getTraceInfoFromScope

// Module 745 (_getTraceInfoFromScope)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 683 */;
import _mod712 from "module_712" /* 712 */;
import freezeDscOnSpan from "freezeDscOnSpan" /* 721 */;

const require = globalThis.__r;
let _require, dependencyMap;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function _getTraceInfoFromScope(arg0, arg1) {
  let closure_0;
  let closure_1;
  let withScopeResult;
  _require = arg0;
  dependencyMap = arg1;
  if (dependencyMap) {
    let obj = require("module_712");
    withScopeResult = obj.withScope(arg1, () => {
      let dynamicSamplingContextFromSpan;
      let spanToTraceContextResult;
      const obj = TRACE_FLAG_NONE;
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const tmpResult = TRACE_FLAG_NONE;
        spanToTraceContextResult = tmpResult.spanToTraceContext(activeSpan);
      } else {
        const tmpResult3 = _mod712;
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
}
