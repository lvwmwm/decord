// Module ID: 7262
// Function ID: 58511
// Name: getDefaultCurrentScope
// Dependencies: [7237, 7257]

// Module 7262 (getDefaultCurrentScope)
const require = arg1;
const dependencyMap = arg6;
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return require(7237) /* getGlobalSingleton */.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new outer1_0(outer1_1[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return require(7237) /* getGlobalSingleton */.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new outer1_0(outer1_1[1]).Scope();
    return scope;
  });
};
