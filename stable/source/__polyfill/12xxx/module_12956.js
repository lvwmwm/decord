// Module ID: 12956
// Function ID: 12957
// Dependencies: [12931, 12951]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12956
import _mod12931 from "module_12931" /* 12931 */;
import ScopeClass from "ScopeClass" /* 12951 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12931.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12931.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
