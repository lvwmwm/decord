// Module ID: 12432
// Function ID: 12433
// Dependencies: [12407, 12427]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12432
import _mod12407 from "module_12407" /* 12407 */;
import _mod12427 from "module_12427" /* 12427 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12407;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12427.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12407;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12427.Scope();
    return scope;
  });
};
