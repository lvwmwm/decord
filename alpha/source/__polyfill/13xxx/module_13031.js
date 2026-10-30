// Module ID: 13031
// Function ID: 13032
// Dependencies: [13022, 13023, 13005, 13025, 13010]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 13031
import _mod13005 from "module_13005" /* 13005 */;
import _mod13010 from "module_13010" /* 13010 */;
import _mod13022 from "module_13022" /* 13022 */;
import _mod13023 from "module_13023" /* 13023 */;
import _mod13025 from "module_13025" /* 13025 */;


export function getClient() {
  const obj = _mod13022;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13023;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod13022;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13023;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod13005;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod13025.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod13022;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13023;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod13010;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod13022;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13023;
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
  const obj = _mod13022;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13023;
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
