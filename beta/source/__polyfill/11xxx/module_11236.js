// Module ID: 11236
// Function ID: 11237
// Dependencies: [11211, 11231]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 11236
import _mod11211 from "module_11211" /* 11211 */;
import _mod11231 from "module_11231" /* 11231 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod11211;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod11231.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod11211;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod11231.Scope();
    return scope;
  });
};
