// Module ID: 12546
// Function ID: 12547
// Dependencies: [12521, 12541]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12546
import _mod12521 from "module_12521" /* 12521 */;
import _mod12541 from "module_12541" /* 12541 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12521;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12541.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12521;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12541.Scope();
    return scope;
  });
};
