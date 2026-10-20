// Module ID: 12449
// Function ID: 12450
// Dependencies: [12424, 12444]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12449
import _mod12424 from "module_12424" /* 12424 */;
import _mod12444 from "module_12444" /* 12444 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12424;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12444.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12424;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12444.Scope();
    return scope;
  });
};
