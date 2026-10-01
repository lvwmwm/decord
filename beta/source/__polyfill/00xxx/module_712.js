// Module ID: 712
// Function ID: 713
// Dependencies: [690, 708]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 712
import _mod690 from "module_690" /* 690 */;
import Scope from "Scope" /* 708 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod690;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod690;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
