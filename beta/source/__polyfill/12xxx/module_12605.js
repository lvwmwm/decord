// Module ID: 12605
// Function ID: 12606
// Dependencies: [12580, 12600]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12605
import _mod12580 from "module_12580" /* 12580 */;
import _mod12600 from "module_12600" /* 12600 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12580;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12600.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12580;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12600.Scope();
    return scope;
  });
};
