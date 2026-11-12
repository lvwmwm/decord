// Module ID: 9757
// Function ID: 9758
// Dependencies: [9748, 9749, 9731, 9751, 9736]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 9757
import _mod9731 from "module_9731" /* 9731 */;
import _mod9736 from "module_9736" /* 9736 */;
import _mod9748 from "module_9748" /* 9748 */;
import _mod9749 from "module_9749" /* 9749 */;
import _mod9751 from "module_9751" /* 9751 */;


export function getClient() {
  const obj = _mod9748;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod9749;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod9748;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod9749;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod9731;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new _mod9751.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod9748;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod9749;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let parentSpanId;
  let spanId;
  let traceId;
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  const obj = _mod9736;
  return obj.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod9748;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod9749;
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
  const obj = _mod9748;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod9749;
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
