// Module ID: 9757
// Function ID: 9758
// Dependencies: [9732, 9752]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 9757
import _mod9732 from "module_9732" /* 9732 */;
import _mod9752 from "module_9752" /* 9752 */;


export function getDefaultCurrentScope() {
  const obj = _mod9732;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod9752.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod9732;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod9752.Scope();
    return scope;
  });
}
