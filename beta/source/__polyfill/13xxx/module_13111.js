// Module ID: 13111
// Function ID: 13112
// Dependencies: [13086, 13106]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13111
import _mod13086 from "module_13086" /* 13086 */;
import ScopeClass from "ScopeClass" /* 13106 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod13086.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod13086.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
