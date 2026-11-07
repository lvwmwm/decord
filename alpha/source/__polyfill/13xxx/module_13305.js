// Module ID: 13305
// Function ID: 13306
// Dependencies: [13296, 13297, 13279, 13299, 13284]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 13305
import _mod13279 from "module_13279" /* 13279 */;
import _mod13284 from "module_13284" /* 13284 */;
import _mod13296 from "module_13296" /* 13296 */;
import _mod13297 from "module_13297" /* 13297 */;
import _mod13299 from "module_13299" /* 13299 */;


export function getClient() {
  const obj = _mod13296;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13297;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod13296;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13297;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod13279;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod13299.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod13296;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13297;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod13284;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod13296;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13297;
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
}
export function withScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod13296;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13297;
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
}
