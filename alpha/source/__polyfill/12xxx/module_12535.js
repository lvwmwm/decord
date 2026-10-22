// Module ID: 12535
// Function ID: 12536
// Dependencies: [12510, 12530]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12535
import _mod12510 from "module_12510" /* 12510 */;
import _mod12530 from "module_12530" /* 12530 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12510;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12530.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12510;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12530.Scope();
    return scope;
  });
};
