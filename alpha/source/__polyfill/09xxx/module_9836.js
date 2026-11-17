// Module ID: 9836
// Function ID: 9837
// Dependencies: [9811, 9831]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 9836
import _mod9811 from "module_9811" /* 9811 */;
import _mod9831 from "module_9831" /* 9831 */;


export function getDefaultCurrentScope() {
  const obj = _mod9811;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod9831.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod9811;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod9831.Scope();
    return scope;
  });
}
