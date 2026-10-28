// Module ID: 12637
// Function ID: 12638
// Dependencies: [12612, 12632]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12637
import _mod12612 from "module_12612" /* 12612 */;
import _mod12632 from "module_12632" /* 12632 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12612;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12632.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12612;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12632.Scope();
    return scope;
  });
};
