// Module ID: 12505
// Function ID: 12506
// Dependencies: [12480, 12500]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12505
import _mod12480 from "module_12480" /* 12480 */;
import _mod12500 from "module_12500" /* 12500 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12480;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12500.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12480;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12500.Scope();
    return scope;
  });
};
