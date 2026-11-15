// Module ID: 13336
// Function ID: 13337
// Dependencies: [13327, 13328, 13310, 13330, 13315]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 13336
import _mod13310 from "module_13310" /* 13310 */;
import _mod13315 from "module_13315" /* 13315 */;
import _mod13327 from "module_13327" /* 13327 */;
import _mod13328 from "module_13328" /* 13328 */;
import _mod13330 from "module_13330" /* 13330 */;


export function getClient() {
  const obj = _mod13327;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13328;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod13327;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13328;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod13310;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod13330.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod13327;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13328;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod13315;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod13327;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13328;
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
  const obj = _mod13327;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13328;
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
