// Module ID: 711
// Function ID: 712
// Dependencies: [689, 707]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 711
import _mod689 from "module_689" /* 689 */;
import Scope from "Scope" /* 707 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function getDefaultCurrentScope() {
  const obj = _mod689;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod689;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
}
