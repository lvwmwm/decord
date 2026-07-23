// Module ID: 7263
// Function ID: 58516
// Name: getCurrentScope
// Dependencies: [7254, 7255, 7237, 7257, 7242]

// Module 7263 (getCurrentScope)
const require = arg1;
const dependencyMap = arg6;
function getCurrentScope() {
  const mainCarrier = require(7254) /* getSentryCarrier */.getMainCarrier();
  const obj = require(7254) /* getSentryCarrier */;
  const asyncContextStrategy = require(7255) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
arg5.getClient = function getClient() {
  return getCurrentScope().getClient();
};
arg5.getCurrentScope = getCurrentScope;
arg5.getGlobalScope = function getGlobalScope() {
  return require(7237) /* getGlobalSingleton */.getGlobalSingleton("globalScope", () => {
    const scope = new outer1_0(outer1_1[3]).Scope();
    return scope;
  });
};
arg5.getIsolationScope = function getIsolationScope() {
  const mainCarrier = require(7254) /* getSentryCarrier */.getMainCarrier();
  const obj = require(7254) /* getSentryCarrier */;
  const asyncContextStrategy = require(7255) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
arg5.getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return require(7242) /* addNonEnumerableProperty */.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
arg5.withIsolationScope = function withIsolationScope() {
  let tmp2;
  let tmp3;
  const mainCarrier = require(7254) /* getSentryCarrier */.getMainCarrier();
  const obj = require(7254) /* getSentryCarrier */;
  const asyncContextStrategy = require(7255) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
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
  const obj2 = require(7255) /* getAsyncContextStrategy */;
};
arg5.withScope = function withScope() {
  let tmp2;
  let tmp3;
  const mainCarrier = require(7254) /* getSentryCarrier */.getMainCarrier();
  const obj = require(7254) /* getSentryCarrier */;
  const asyncContextStrategy = require(7255) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
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
  const obj2 = require(7255) /* getAsyncContextStrategy */;
};
