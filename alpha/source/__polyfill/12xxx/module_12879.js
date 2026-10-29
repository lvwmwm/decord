// Module ID: 12879
// Function ID: 12880
// Dependencies: [12854, 12874]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12879
import _mod12854 from "module_12854" /* 12854 */;
import _mod12874 from "module_12874" /* 12874 */;


export function getDefaultCurrentScope() {
  const obj = _mod12854;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12874.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod12854;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12874.Scope();
    return scope;
  });
}
