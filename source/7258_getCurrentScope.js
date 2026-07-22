// Module ID: 7258
// Function ID: 58482
// Name: getCurrentScope
// Dependencies: []

// Module 7258 (getCurrentScope)
function getCurrentScope() {
  const mainCarrier = arg1(arg6[0]).getMainCarrier();
  const obj = arg1(arg6[0]);
  const asyncContextStrategy = arg1(arg6[1]).getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
arg5.getClient = function getClient() {
  return getCurrentScope().getClient();
};
arg5.getCurrentScope = getCurrentScope;
arg5.getGlobalScope = function getGlobalScope() {
  return arg1(arg6[2]).getGlobalSingleton("globalScope", () => {
    const scope = new callback(closure_1[3]).Scope();
    return scope;
  });
};
arg5.getIsolationScope = function getIsolationScope() {
  const mainCarrier = arg1(arg6[0]).getMainCarrier();
  const obj = arg1(arg6[0]);
  const asyncContextStrategy = arg1(arg6[1]).getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
arg5.getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return arg1(arg6[4]).dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
arg5.withIsolationScope = function withIsolationScope() {
  let tmp2;
  let tmp3;
  const mainCarrier = arg1(arg6[0]).getMainCarrier();
  const obj = arg1(arg6[0]);
  const asyncContextStrategy = arg1(arg6[1]).getAsyncContextStrategy(mainCarrier);
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  if (2 === arr.length) {
    [tmp2, tmp3] = arr;
    if (tmp2) {
      let result = asyncContextStrategy.withSetIsolationScope(tmp2, tmp3);
    } else {
      result = asyncContextStrategy.withIsolationScope(tmp3);
    }
    return result;
  } else {
    return asyncContextStrategy.withIsolationScope(arr[0]);
  }
  const obj2 = arg1(arg6[1]);
};
arg5.withScope = function withScope() {
  let tmp2;
  let tmp3;
  const mainCarrier = arg1(arg6[0]).getMainCarrier();
  const obj = arg1(arg6[0]);
  const asyncContextStrategy = arg1(arg6[1]).getAsyncContextStrategy(mainCarrier);
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  if (2 === arr.length) {
    [tmp2, tmp3] = arr;
    if (tmp2) {
      let withSetScopeResult = asyncContextStrategy.withSetScope(tmp2, tmp3);
    } else {
      withSetScopeResult = asyncContextStrategy.withScope(tmp3);
    }
    return withSetScopeResult;
  } else {
    return asyncContextStrategy.withScope(arr[0]);
  }
  const obj2 = arg1(arg6[1]);
};
