// Module ID: 7401
// Function ID: 7402
// Name: getDefaultCurrentScope
// Dependencies: [7376, 7396]

// Module 7401 (getDefaultCurrentScope)
const require = arg1;
const dependencyMap = arg6;
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return require(7376) /* getGlobalSingleton */.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return require(7376) /* getGlobalSingleton */.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
