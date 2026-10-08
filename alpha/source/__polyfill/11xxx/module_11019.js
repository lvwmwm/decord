// Module ID: 11019
// Function ID: 11020
// Dependencies: [10994, 11014]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 11019
import _mod10994 from "module_10994" /* 10994 */;
import _mod11014 from "module_11014" /* 11014 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod10994;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod11014.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod10994;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod11014.Scope();
    return scope;
  });
};
