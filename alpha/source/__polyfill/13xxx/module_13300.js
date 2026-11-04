// Module ID: 13300
// Function ID: 13301
// Dependencies: [13291, 13292, 13274, 13294, 13279]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 13300
import _mod13274 from "module_13274" /* 13274 */;
import _mod13279 from "module_13279" /* 13279 */;
import _mod13291 from "module_13291" /* 13291 */;
import _mod13292 from "module_13292" /* 13292 */;
import _mod13294 from "module_13294" /* 13294 */;


export function getClient() {
  const obj = _mod13291;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13292;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod13291;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13292;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod13274;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod13294.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod13291;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13292;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod13279;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod13291;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13292;
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
  const obj = _mod13291;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13292;
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
