// Module ID: 12604
// Function ID: 12605
// Dependencies: [12579, 12599]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12604
import _mod12579 from "module_12579" /* 12579 */;
import _mod12599 from "module_12599" /* 12599 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12579;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12599.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12579;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12599.Scope();
    return scope;
  });
};
