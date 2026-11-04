// Module ID: 13081
// Function ID: 13082
// Dependencies: [13072, 13073, 13055, 13075, 13060]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 13081
import _mod13055 from "module_13055" /* 13055 */;
import _mod13060 from "module_13060" /* 13060 */;
import _mod13072 from "module_13072" /* 13072 */;
import _mod13073 from "module_13073" /* 13073 */;
import _mod13075 from "module_13075" /* 13075 */;


export function getClient() {
  const obj = _mod13072;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13073;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod13072;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13073;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod13055;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod13075.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod13072;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13073;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod13060;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod13072;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13073;
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
  const obj = _mod13072;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13073;
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
