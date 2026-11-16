// Module ID: 9823
// Function ID: 9824
// Dependencies: [9798, 9818]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 9823
import _mod9798 from "module_9798" /* 9798 */;
import _mod9818 from "module_9818" /* 9818 */;


export function getDefaultCurrentScope() {
  const obj = _mod9798;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod9818.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod9798;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod9818.Scope();
    return scope;
  });
}
