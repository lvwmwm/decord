// Module ID: 12408
// Function ID: 12409
// Dependencies: [12399, 12400, 12382, 12402, 12387]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 12408
import _mod12382 from "module_12382" /* 12382 */;
import _mod12387 from "module_12387" /* 12387 */;
import _mod12399 from "module_12399" /* 12399 */;
import _mod12400 from "module_12400" /* 12400 */;
import _mod12402 from "module_12402" /* 12402 */;


export const getClient = function getClient() {
  const obj = _mod12399;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12400;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const obj = _mod12399;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12400;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  const obj = _mod12382;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod12402.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const obj = _mod12399;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12400;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod12387;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
export const withIsolationScope = function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod12399;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12400;
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
  const obj = _mod12399;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12400;
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
