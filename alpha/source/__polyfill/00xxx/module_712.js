// Module ID: 712
// Function ID: 713
// Dependencies: [689, 705, 707, 693]
// Exports: getClient, getCurrentScope, getGlobalScope, getIsolationScope, getTraceContextFromScope, withIsolationScope, withScope

// Module 712
import _mod689 from "module_689" /* 689 */;
import generateSpanId from "generateSpanId" /* 693 */;
import _mod705 from "module_705" /* 705 */;
import Scope from "Scope" /* 707 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function getClient() {
  const obj = _mod689;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod705;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const obj = _mod689;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod705;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  const obj = _mod689;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const obj = _mod689;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod705;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  let propagationSpanId;
  const propagationContext = getPropagationContext.getPropagationContext();
  const parentSpanId = propagationContext.parentSpanId;
  const obj = { trace_id: propagationContext.traceId, span_id: propagationSpanId };
  propagationSpanId = propagationContext.propagationSpanId;
  if (!propagationSpanId) {
    const obj2 = generateSpanId;
    propagationSpanId = obj2.generateSpanId();
  }
  if (parentSpanId) {
    obj.parent_span_id = parentSpanId;
  }
  return obj;
}
export function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod689;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod705;
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
  const obj = _mod689;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod705;
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
