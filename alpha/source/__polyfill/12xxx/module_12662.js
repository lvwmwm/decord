// Module ID: 12662
// Function ID: 12663
// Dependencies: [12637, 12657]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12662
import _mod12637 from "module_12637" /* 12637 */;
import _mod12657 from "module_12657" /* 12657 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12637;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12657.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12637;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12657.Scope();
    return scope;
  });
};
