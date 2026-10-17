// Module ID: 12395
// Function ID: 12396
// Dependencies: [12370, 12390]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12395
import _mod12370 from "module_12370" /* 12370 */;
import _mod12390 from "module_12390" /* 12390 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12370;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12390.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12370;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12390.Scope();
    return scope;
  });
};
