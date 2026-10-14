// Module ID: 12068
// Function ID: 12069
// Dependencies: [12043, 12063]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12068
import _mod12043 from "module_12043" /* 12043 */;
import _mod12063 from "module_12063" /* 12063 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12043;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12063.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12043;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12063.Scope();
    return scope;
  });
};
