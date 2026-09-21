// Module ID: 13075
// Function ID: 13076
// Dependencies: [13050, 13070]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13075
import _mod13050 from "module_13050" /* 13050 */;
import ScopeClass from "ScopeClass" /* 13070 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod13050.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod13050.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
