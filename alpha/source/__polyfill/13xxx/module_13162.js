// Module ID: 13162
// Function ID: 13163
// Dependencies: [13137, 13157]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13162
import _mod13137 from "module_13137" /* 13137 */;
import ScopeClass from "ScopeClass" /* 13157 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod13137.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod13137.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
