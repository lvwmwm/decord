// Module ID: 7623
// Function ID: 7624
// Name: getDefaultCurrentScope
// Dependencies: [7598, 7618]

// Module 7623 (getDefaultCurrentScope)
import getGlobalSingleton from "getGlobalSingleton" /* 7598 */;

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
