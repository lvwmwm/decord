// Module ID: 13065
// Function ID: 13066
// Dependencies: [13040, 13060]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13065
import _mod13040 from "module_13040" /* 13040 */;
import _mod13060 from "module_13060" /* 13060 */;


export function getDefaultCurrentScope() {
  const obj = _mod13040;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13060.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13040;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13060.Scope();
    return scope;
  });
}
