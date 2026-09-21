// Module ID: 716
// Function ID: 717
// Dependencies: [694, 712]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 716
import _mod694 from "module_694" /* 694 */;
import Scope from "Scope" /* 712 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod694.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod694.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
