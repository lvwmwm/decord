// Module ID: 12547
// Function ID: 12548
// Dependencies: [12538, 12539, 12521, 12541, 12526]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 12547
import _mod12521 from "module_12521" /* 12521 */;
import _mod12526 from "module_12526" /* 12526 */;
import _mod12538 from "module_12538" /* 12538 */;
import _mod12539 from "module_12539" /* 12539 */;
import _mod12541 from "module_12541" /* 12541 */;


export const getClient = function getClient() {
  const obj = _mod12538;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12539;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const obj = _mod12538;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12539;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  const obj = _mod12521;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod12541.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const obj = _mod12538;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12539;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod12526;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
export const withIsolationScope = function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod12538;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12539;
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
  const obj = _mod12538;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12539;
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
