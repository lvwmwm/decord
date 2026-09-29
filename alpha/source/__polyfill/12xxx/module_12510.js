// Module ID: 12510
// Function ID: 12511
// Dependencies: [12485, 12505]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12510
import _mod12485 from "module_12485" /* 12485 */;
import ScopeClass from "ScopeClass" /* 12505 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12485.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12485.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
