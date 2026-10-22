// Module ID: 12407
// Function ID: 12408
// Dependencies: [12382, 12402]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12407
import _mod12382 from "module_12382" /* 12382 */;
import _mod12402 from "module_12402" /* 12402 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12382;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12402.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12382;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12402.Scope();
    return scope;
  });
};
