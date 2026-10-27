// Module ID: 12607
// Function ID: 12608
// Dependencies: [12582, 12602]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12607
import _mod12582 from "module_12582" /* 12582 */;
import _mod12602 from "module_12602" /* 12602 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12582;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12602.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12582;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12602.Scope();
    return scope;
  });
};
