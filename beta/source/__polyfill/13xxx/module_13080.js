// Module ID: 13080
// Function ID: 13081
// Dependencies: [13055, 13075]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13080
import _mod13055 from "module_13055" /* 13055 */;
import _mod13075 from "module_13075" /* 13075 */;


export function getDefaultCurrentScope() {
  const obj = _mod13055;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13075.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13055;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13075.Scope();
    return scope;
  });
}
