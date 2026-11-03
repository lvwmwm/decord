// Module ID: 13217
// Function ID: 13218
// Dependencies: [13208, 13209, 13191, 13211, 13196]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 13217
import _mod13191 from "module_13191" /* 13191 */;
import _mod13196 from "module_13196" /* 13196 */;
import _mod13208 from "module_13208" /* 13208 */;
import _mod13209 from "module_13209" /* 13209 */;
import _mod13211 from "module_13211" /* 13211 */;


export function getClient() {
  const obj = _mod13208;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13209;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod13208;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13209;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod13191;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod13211.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod13208;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13209;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod13196;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod13208;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13209;
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
  const obj = _mod13208;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13209;
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
