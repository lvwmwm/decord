// Module ID: 12880
// Function ID: 12881
// Dependencies: [12871, 12872, 12854, 12874, 12859]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 12880
import _mod12854 from "module_12854" /* 12854 */;
import _mod12859 from "module_12859" /* 12859 */;
import _mod12871 from "module_12871" /* 12871 */;
import _mod12872 from "module_12872" /* 12872 */;
import _mod12874 from "module_12874" /* 12874 */;


export function getClient() {
  const obj = _mod12871;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12872;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod12871;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12872;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod12854;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod12874.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod12871;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12872;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod12859;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod12871;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12872;
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
  const obj = _mod12871;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12872;
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
