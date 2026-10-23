// Module ID: 12565
// Function ID: 12566
// Dependencies: [12540, 12560]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12565
import _mod12540 from "module_12540" /* 12540 */;
import _mod12560 from "module_12560" /* 12560 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12540;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12560.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12540;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12560.Scope();
    return scope;
  });
};
