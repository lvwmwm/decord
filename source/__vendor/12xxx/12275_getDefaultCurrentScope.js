// Module ID: 12275
// Function ID: 12276
// Name: getDefaultCurrentScope
// Dependencies: [12250, 12270]

// Module 12275 (getDefaultCurrentScope)
import getGlobalSingleton from "getGlobalSingleton" /* 12250 */;

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
