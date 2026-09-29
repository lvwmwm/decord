// Module ID: 13105
// Function ID: 13106
// Dependencies: [13080, 13100]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13105
import _mod13080 from "module_13080" /* 13080 */;
import ScopeClass from "ScopeClass" /* 13100 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod13080.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod13080.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
