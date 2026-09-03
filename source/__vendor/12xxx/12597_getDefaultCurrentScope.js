// Module ID: 12597
// Function ID: 12598
// Name: getDefaultCurrentScope
// Dependencies: [12572, 12592]

// Module 12597 (getDefaultCurrentScope)
import getGlobalSingleton from "getGlobalSingleton" /* 12572 */;

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
