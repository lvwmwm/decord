// Module ID: 13304
// Function ID: 13305
// Dependencies: [13279, 13299]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13304
import _mod13279 from "module_13279" /* 13279 */;
import _mod13299 from "module_13299" /* 13299 */;


export function getDefaultCurrentScope() {
  const obj = _mod13279;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13299.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13279;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13299.Scope();
    return scope;
  });
}
