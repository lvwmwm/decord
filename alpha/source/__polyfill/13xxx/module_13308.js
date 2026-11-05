// Module ID: 13308
// Function ID: 13309
// Dependencies: [13299, 13300, 13282, 13302, 13287]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 13308
import _mod13282 from "module_13282" /* 13282 */;
import _mod13287 from "module_13287" /* 13287 */;
import _mod13299 from "module_13299" /* 13299 */;
import _mod13300 from "module_13300" /* 13300 */;
import _mod13302 from "module_13302" /* 13302 */;


export function getClient() {
  const obj = _mod13299;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13300;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod13299;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13300;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod13282;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod13302.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod13299;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13300;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod13287;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod13299;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13300;
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
  const obj = _mod13299;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13300;
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
