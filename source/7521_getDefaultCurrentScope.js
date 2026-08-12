// Module ID: 7521
// Function ID: 7522
// Name: getDefaultCurrentScope
// Dependencies: [7496, 7516]

// Module 7521 (getDefaultCurrentScope)
const require = arg1;
const dependencyMap = arg6;
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return require(7496) /* getGlobalSingleton */.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return require(7496) /* getGlobalSingleton */.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
