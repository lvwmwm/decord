// Module ID: 11234
// Function ID: 11235
// Dependencies: [11209, 11229]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 11234
import _mod11209 from "module_11209" /* 11209 */;
import _mod11229 from "module_11229" /* 11229 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod11209;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod11229.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod11209;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod11229.Scope();
    return scope;
  });
};
