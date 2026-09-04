// Module ID: 12755
// Function ID: 12756
// Name: getDefaultCurrentScope
// Dependencies: [12730, 12750]

// Module 12755 (getDefaultCurrentScope)
import getGlobalSingleton from "getGlobalSingleton" /* 12730 */;

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
