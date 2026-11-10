// Module ID: 13319
// Function ID: 13320
// Dependencies: [13310, 13311, 13293, 13313, 13298]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 13319
import _mod13293 from "module_13293" /* 13293 */;
import _mod13298 from "module_13298" /* 13298 */;
import _mod13310 from "module_13310" /* 13310 */;
import _mod13311 from "module_13311" /* 13311 */;
import _mod13313 from "module_13313" /* 13313 */;


export function getClient() {
  const obj = _mod13310;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13311;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod13310;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13311;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod13293;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod13313.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod13310;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13311;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod13298;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod13310;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13311;
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
  const obj = _mod13310;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13311;
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
