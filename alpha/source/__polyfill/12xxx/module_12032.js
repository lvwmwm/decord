// Module ID: 12032
// Function ID: 12033
// Dependencies: [12007, 12027]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12032
import _mod12007 from "module_12007" /* 12007 */;
import _mod12027 from "module_12027" /* 12027 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12007;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12027.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12007;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12027.Scope();
    return scope;
  });
};
