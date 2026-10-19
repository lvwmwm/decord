// Module ID: 12412
// Function ID: 12413
// Dependencies: [12387, 12407]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12412
import _mod12387 from "module_12387" /* 12387 */;
import _mod12407 from "module_12407" /* 12407 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12387;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12407.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12387;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12407.Scope();
    return scope;
  });
};
