// Module ID: 13318
// Function ID: 13319
// Dependencies: [13293, 13313]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13318
import _mod13293 from "module_13293" /* 13293 */;
import _mod13313 from "module_13313" /* 13313 */;


export function getDefaultCurrentScope() {
  const obj = _mod13293;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13313.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13293;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13313.Scope();
    return scope;
  });
}
