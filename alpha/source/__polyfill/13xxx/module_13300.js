// Module ID: 13300
// Function ID: 13301
// Dependencies: [13275, 13295]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 13300
import _mod13275 from "module_13275" /* 13275 */;
import _mod13295 from "module_13295" /* 13295 */;


export function getDefaultCurrentScope() {
  const obj = _mod13275;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod13295.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  const obj = _mod13275;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod13295.Scope();
    return scope;
  });
}
