// Module ID: 7389
// Function ID: 7390
// Name: getDefaultCurrentScope
// Dependencies: [7364, 7384]

// Module 7389 (getDefaultCurrentScope)
const require = arg1;
const dependencyMap = arg6;
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return require(7364) /* getGlobalSingleton */.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return require(7364) /* getGlobalSingleton */.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
