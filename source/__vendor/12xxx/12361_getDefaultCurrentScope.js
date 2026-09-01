// Module ID: 12361
// Function ID: 12362
// Name: getDefaultCurrentScope
// Dependencies: [12336, 12356]

// Module 12361 (getDefaultCurrentScope)
import getGlobalSingleton from "getGlobalSingleton" /* 12336 */;

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
