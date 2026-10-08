// Module ID: 11020
// Function ID: 11021
// Dependencies: [11011, 11012, 10994, 11014, 10999]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 11020
import _mod10994 from "module_10994" /* 10994 */;
import _mod10999 from "module_10999" /* 10999 */;
import _mod11011 from "module_11011" /* 11011 */;
import _mod11012 from "module_11012" /* 11012 */;
import _mod11014 from "module_11014" /* 11014 */;


export const getClient = function getClient() {
  const obj = _mod11011;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod11012;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const obj = _mod11011;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod11012;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  const obj = _mod10994;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod11014.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const obj = _mod11011;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod11012;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod10999;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
export const withIsolationScope = function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod11011;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod11012;
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
  const obj = _mod11011;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod11012;
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
