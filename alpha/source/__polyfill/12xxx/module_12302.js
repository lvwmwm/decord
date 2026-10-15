// Module ID: 12302
// Function ID: 12303
// Dependencies: [12293, 12294, 12276, 12296, 12281]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 12302
import _mod12276 from "module_12276" /* 12276 */;
import _mod12281 from "module_12281" /* 12281 */;
import _mod12293 from "module_12293" /* 12293 */;
import _mod12294 from "module_12294" /* 12294 */;
import _mod12296 from "module_12296" /* 12296 */;


export const getClient = function getClient() {
  const obj = _mod12293;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12294;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const obj = _mod12293;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12294;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  const obj = _mod12276;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod12296.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const obj = _mod12293;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12294;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod12281;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
export const withIsolationScope = function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod12293;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12294;
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
  const obj = _mod12293;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12294;
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
