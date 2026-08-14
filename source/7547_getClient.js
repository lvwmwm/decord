// Module ID: 7547
// Function ID: 7548
// Name: getClient
// Dependencies: [7538, 7539, 7521, 7541, 7526]

// Module 7547 (getClient)
const require = arg1;
const dependencyMap = arg6;
arg5.getClient = function getClient() {
  const mainCarrier = require(7538) /* getMainCarrier */.getMainCarrier();
  const obj = require(7538) /* getMainCarrier */;
  const asyncContextStrategy = require(7539) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
arg5.getCurrentScope = function getCurrentScope() {
  const mainCarrier = require(7538) /* getMainCarrier */.getMainCarrier();
  const obj = require(7538) /* getMainCarrier */;
  const asyncContextStrategy = require(7539) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
arg5.getGlobalScope = function getGlobalScope() {
  return require(7521) /* getGlobalSingleton */.getGlobalSingleton("globalScope", () => {
    const scope = new callback(table[3]).Scope();
    return scope;
  });
};
arg5.getIsolationScope = function getIsolationScope() {
  const mainCarrier = require(7538) /* getMainCarrier */.getMainCarrier();
  const obj = require(7538) /* getMainCarrier */;
  const asyncContextStrategy = require(7539) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
arg5.getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return require(7526) /* addNonEnumerableProperty */.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
arg5.withIsolationScope = function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const mainCarrier = require(7538) /* getMainCarrier */.getMainCarrier();
  const obj = require(7538) /* getMainCarrier */;
  const asyncContextStrategy = require(7539) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  if (2 === items.length) {
    [tmp2, tmp3] = items;
    if (tmp2) {
      let result = asyncContextStrategy.withSetIsolationScope(tmp2, tmp3);
    } else {
      result = asyncContextStrategy.withIsolationScope(tmp3);
    }
    return result;
  } else {
    return asyncContextStrategy.withIsolationScope(items[0]);
  }
  const obj2 = require(7539) /* getAsyncContextStrategy */;
};
arg5.withScope = function withScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const mainCarrier = require(7538) /* getMainCarrier */.getMainCarrier();
  const obj = require(7538) /* getMainCarrier */;
  const asyncContextStrategy = require(7539) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  if (2 === items.length) {
    [tmp2, tmp3] = items;
    if (tmp2) {
      let withSetScopeResult = asyncContextStrategy.withSetScope(tmp2, tmp3);
    } else {
      withSetScopeResult = asyncContextStrategy.withScope(tmp3);
    }
    return withSetScopeResult;
  } else {
    return asyncContextStrategy.withScope(items[0]);
  }
  const obj2 = require(7539) /* getAsyncContextStrategy */;
};
