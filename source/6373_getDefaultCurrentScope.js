// Module ID: 6373
// Function ID: 57082
// Name: getDefaultCurrentScope
// Dependencies: [6348, 6368]

// Module 6373 (getDefaultCurrentScope)
const require = arg1;
const dependencyMap = arg6;
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return require(6348) /* getGlobalSingleton */.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new outer1_0(outer1_1[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return require(6348) /* getGlobalSingleton */.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new outer1_0(outer1_1[1]).Scope();
    return scope;
  });
};
