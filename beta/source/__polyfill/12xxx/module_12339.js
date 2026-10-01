// Module ID: 12339
// Function ID: 12340
// Dependencies: [12314, 12334]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12339
import _mod12314 from "module_12314" /* 12314 */;
import _mod12334 from "module_12334" /* 12334 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12314;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12334.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12314;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12334.Scope();
    return scope;
  });
};
