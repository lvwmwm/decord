// Module ID: 12540
// Function ID: 12541
// Dependencies: [12515, 12535]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12540
import _mod12515 from "module_12515" /* 12515 */;
import ScopeClass from "ScopeClass" /* 12535 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12515.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12515.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
