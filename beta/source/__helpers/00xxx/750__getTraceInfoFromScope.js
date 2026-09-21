// Module ID: 750
// Function ID: 751
// Name: _getTraceInfoFromScope
// Dependencies: [717, 688, 726]
// Exports: _getTraceInfoFromScope

// Module 750 (_getTraceInfoFromScope)
import spanToJSON from "spanToJSON" /* 688 */;
import _mod726 from "module_726" /* 726 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const _getTraceInfoFromScope = function _getTraceInfoFromScope(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  if (arg1) {
    let withScopeResult = require("module_717").withScope(arg1, () => {
      const activeSpan = spanToJSON.getActiveSpan();
      if (activeSpan) {
        let spanToTraceContextResult = tmp(688).spanToTraceContext(activeSpan);
        const tmpResult = tmp(688);
      } else {
        spanToTraceContextResult = tmp(717).getTraceContextFromScope(closure_1);
        const tmpResult3 = tmp(717);
      }
      const tmpResult4 = _mod726;
      if (activeSpan) {
        let dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromScope(closure_0, closure_1);
      }
      const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
      return items;
    });
    const obj = require("module_717");
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};
