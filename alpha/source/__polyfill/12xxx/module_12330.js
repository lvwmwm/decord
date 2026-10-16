// Module ID: 12330
// Function ID: 12331
// Dependencies: [12305, 12325]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12330
import _mod12305 from "module_12305" /* 12305 */;
import _mod12325 from "module_12325" /* 12325 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12305;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12325.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12305;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12325.Scope();
    return scope;
  });
};
