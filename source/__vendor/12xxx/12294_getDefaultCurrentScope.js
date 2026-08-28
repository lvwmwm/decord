// Module ID: 12294
// Function ID: 12295
// Name: getDefaultCurrentScope
// Dependencies: [12269, 12289]

// Module 12294 (getDefaultCurrentScope)
import getGlobalSingleton from "getGlobalSingleton" /* 12269 */;

require = arg1;
const dependencyMap = arg6;
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return getGlobalSingleton.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return getGlobalSingleton.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
