// Module ID: 12599
// Function ID: 12600
// Dependencies: [12574, 12594]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12599
import _mod12574 from "module_12574" /* 12574 */;
import _mod12594 from "module_12594" /* 12594 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12574;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12594.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12574;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12594.Scope();
    return scope;
  });
};
