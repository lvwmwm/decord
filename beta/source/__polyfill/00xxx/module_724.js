// Module ID: 724
// Function ID: 725
// Dependencies: [702, 720]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 724
import _mod702 from "module_702" /* 702 */;
import Scope from "Scope" /* 720 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod702;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod702;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
