// Module ID: 9756
// Function ID: 9757
// Dependencies: [9731, 9751]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 9756
import _mod9731 from "module_9731" /* 9731 */;
import _mod9751 from "module_9751" /* 9751 */;


export function getDefaultCurrentScope() {
  const obj = _mod9731;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod9751.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod9731;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod9751.Scope();
    return scope;
  });
}
