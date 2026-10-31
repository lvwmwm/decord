// Module ID: 13066
// Function ID: 13067
// Dependencies: [13057, 13058, 13040, 13060, 13045]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 13066
import _mod13040 from "module_13040" /* 13040 */;
import _mod13045 from "module_13045" /* 13045 */;
import _mod13057 from "module_13057" /* 13057 */;
import _mod13058 from "module_13058" /* 13058 */;
import _mod13060 from "module_13060" /* 13060 */;


export function getClient() {
  const obj = _mod13057;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13058;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod13057;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13058;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod13040;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod13060.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod13057;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13058;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod13045;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod13057;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13058;
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
  const obj = _mod13057;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13058;
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
