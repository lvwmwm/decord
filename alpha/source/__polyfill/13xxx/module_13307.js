// Module ID: 13307
// Function ID: 13308
// Dependencies: [13282, 13302]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13307
import _mod13282 from "module_13282" /* 13282 */;
import _mod13302 from "module_13302" /* 13302 */;


export function getDefaultCurrentScope() {
  const obj = _mod13282;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13302.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13282;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13302.Scope();
    return scope;
  });
}
