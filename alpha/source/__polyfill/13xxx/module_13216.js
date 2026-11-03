// Module ID: 13216
// Function ID: 13217
// Dependencies: [13191, 13211]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13216
import _mod13191 from "module_13191" /* 13191 */;
import _mod13211 from "module_13211" /* 13211 */;


export function getDefaultCurrentScope() {
  const obj = _mod13191;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13211.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13191;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13211.Scope();
    return scope;
  });
}
