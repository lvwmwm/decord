// Module ID: 13336
// Function ID: 13337
// Dependencies: [13311, 13331]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13336
import _mod13311 from "module_13311" /* 13311 */;
import _mod13331 from "module_13331" /* 13331 */;


export function getDefaultCurrentScope() {
  const obj = _mod13311;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13331.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13311;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13331.Scope();
    return scope;
  });
}
