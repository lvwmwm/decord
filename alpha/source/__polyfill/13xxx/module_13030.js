// Module ID: 13030
// Function ID: 13031
// Dependencies: [13005, 13025]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13030
import _mod13005 from "module_13005" /* 13005 */;
import _mod13025 from "module_13025" /* 13025 */;


export function getDefaultCurrentScope() {
  const obj = _mod13005;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13025.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13005;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13025.Scope();
    return scope;
  });
}
