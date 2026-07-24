// Module ID: 857
// Function ID: 9619
// Name: _getTraceInfoFromScope
// Dependencies: [825, 796, 833]

// Module 857 (_getTraceInfoFromScope)
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._getTraceInfoFromScope = function _getTraceInfoFromScope(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  if (arg1) {
    let withScopeResult = _require(825).withScope(arg1, () => {
      const activeSpan = callback(796).getActiveSpan();
      if (activeSpan) {
        let tmp2Result = tmp2(796);
        let spanToTraceContextResult = tmp2Result.spanToTraceContext(activeSpan);
      } else {
        tmp2Result = tmp2(825);
        spanToTraceContextResult = tmp2Result.getTraceContextFromScope(dependencyMap);
      }
      const obj4 = callback(833);
      if (activeSpan) {
        let dynamicSamplingContextFromSpan = obj4.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = obj4.getDynamicSamplingContextFromScope(callback, dependencyMap);
      }
      const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
      return items;
    });
    const obj = _require(825);
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};
