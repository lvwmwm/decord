// Module ID: 857
// Function ID: 9617
// Name: _getTraceInfoFromScope
// Dependencies: []

// Module 857 (_getTraceInfoFromScope)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._getTraceInfoFromScope = function _getTraceInfoFromScope(arg0, arg1) {
  arg1 = arg0;
  const arg6 = arg1;
  if (arg1) {
    let withScopeResult = arg1(arg6[0]).withScope(arg1, () => {
      const activeSpan = arg0(arg1[1]).getActiveSpan();
      if (activeSpan) {
        let tmp2Result = tmp2(tmp3[1]);
        let spanToTraceContextResult = tmp2Result.spanToTraceContext(activeSpan);
      } else {
        tmp2Result = tmp2(tmp3[0]);
        spanToTraceContextResult = tmp2Result.getTraceContextFromScope(arg1);
      }
      const obj4 = arg0(arg1[2]);
      if (activeSpan) {
        let dynamicSamplingContextFromSpan = obj4.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = obj4.getDynamicSamplingContextFromScope(arg0, arg1);
      }
      const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
      return items;
    });
    const obj = arg1(arg6[0]);
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};
