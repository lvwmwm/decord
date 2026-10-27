// Module ID: 12615
// Function ID: 12616
// Dependencies: [12590, 12610]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12615
import _mod12590 from "module_12590" /* 12590 */;
import _mod12610 from "module_12610" /* 12610 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12590;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12610.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12590;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12610.Scope();
    return scope;
  });
};
