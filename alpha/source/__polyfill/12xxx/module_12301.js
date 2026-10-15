// Module ID: 12301
// Function ID: 12302
// Dependencies: [12276, 12296]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12301
import _mod12276 from "module_12276" /* 12276 */;
import _mod12296 from "module_12296" /* 12296 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12276;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12296.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12276;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12296.Scope();
    return scope;
  });
};
