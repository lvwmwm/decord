// Module ID: 13281
// Function ID: 13282
// Dependencies: [13256, 13276]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13281
import _mod13256 from "module_13256" /* 13256 */;
import _mod13276 from "module_13276" /* 13276 */;


export function getDefaultCurrentScope() {
  const obj = _mod13256;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13276.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13256;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13276.Scope();
    return scope;
  });
}
