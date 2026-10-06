// Module ID: 12337
// Function ID: 12338
// Dependencies: [12312, 12332]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12337
import _mod12312 from "module_12312" /* 12312 */;
import _mod12332 from "module_12332" /* 12332 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12312;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12332.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12312;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12332.Scope();
    return scope;
  });
};
