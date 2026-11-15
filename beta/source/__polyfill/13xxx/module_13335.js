// Module ID: 13335
// Function ID: 13336
// Dependencies: [13310, 13330]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13335
import _mod13310 from "module_13310" /* 13310 */;
import _mod13330 from "module_13330" /* 13330 */;


export function getDefaultCurrentScope() {
  const obj = _mod13310;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13330.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13310;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13330.Scope();
    return scope;
  });
}
