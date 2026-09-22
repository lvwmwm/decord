// Module ID: 13080
// Function ID: 13081
// Dependencies: [13055, 13075]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13080
import _mod13055 from "module_13055" /* 13055 */;
import ScopeClass from "ScopeClass" /* 13075 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod13055.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod13055.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
