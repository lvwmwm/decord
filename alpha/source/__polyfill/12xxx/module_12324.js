// Module ID: 12324
// Function ID: 12325
// Dependencies: [12299, 12319]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12324
import _mod12299 from "module_12299" /* 12299 */;
import _mod12319 from "module_12319" /* 12319 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12299;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12319.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12299;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12319.Scope();
    return scope;
  });
};
