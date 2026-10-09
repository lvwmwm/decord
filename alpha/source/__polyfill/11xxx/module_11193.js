// Module ID: 11193
// Function ID: 11194
// Dependencies: [11168, 11188]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 11193
import _mod11168 from "module_11168" /* 11168 */;
import _mod11188 from "module_11188" /* 11188 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod11168;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod11188.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod11168;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod11188.Scope();
    return scope;
  });
};
