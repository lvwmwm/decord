// Module ID: 13299
// Function ID: 13300
// Dependencies: [13274, 13294]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13299
import _mod13274 from "module_13274" /* 13274 */;
import _mod13294 from "module_13294" /* 13294 */;


export function getDefaultCurrentScope() {
  const obj = _mod13274;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13294.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13274;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13294.Scope();
    return scope;
  });
}
