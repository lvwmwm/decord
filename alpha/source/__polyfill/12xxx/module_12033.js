// Module ID: 12033
// Function ID: 12034
// Dependencies: [12024, 12025, 12007, 12027, 12012]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 12033
import _mod12007 from "module_12007" /* 12007 */;
import _mod12012 from "module_12012" /* 12012 */;
import _mod12024 from "module_12024" /* 12024 */;
import _mod12025 from "module_12025" /* 12025 */;
import _mod12027 from "module_12027" /* 12027 */;


export const getClient = function getClient() {
  const obj = _mod12024;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12025;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const obj = _mod12024;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12025;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  const obj = _mod12007;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod12027.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const obj = _mod12024;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12025;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod12012;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
export const withIsolationScope = function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod12024;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12025;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (2 === items.length) {
    let result;
    [tmp2, tmp3] = items;
    if (tmp2) {
      result = asyncContextStrategy.withSetIsolationScope(tmp2, tmp3);
    } else {
      result = asyncContextStrategy.withIsolationScope(tmp3);
    }
    return result;
  } else {
    return asyncContextStrategy.withIsolationScope(items[0]);
  }
};
export const withScope = function withScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod12024;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12025;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (2 === items.length) {
    let withSetScopeResult;
    [tmp2, tmp3] = items;
    if (tmp2) {
      withSetScopeResult = asyncContextStrategy.withSetScope(tmp2, tmp3);
    } else {
      withSetScopeResult = asyncContextStrategy.withScope(tmp3);
    }
    return withSetScopeResult;
  } else {
    return asyncContextStrategy.withScope(items[0]);
  }
};
