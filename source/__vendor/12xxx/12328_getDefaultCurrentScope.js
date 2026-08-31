// Module ID: 12328
// Function ID: 12329
// Name: getDefaultCurrentScope
// Dependencies: [12303, 12323]

// Module 12328 (getDefaultCurrentScope)
import getGlobalSingleton from "getGlobalSingleton" /* 12303 */;

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
