// Module ID: 6337
// Function ID: 56993
// Name: getDefaultCurrentScope
// Dependencies: [6312, 6332]

// Module 6337 (getDefaultCurrentScope)
const require = arg1;
const dependencyMap = arg6;
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return require(6312) /* getGlobalSingleton */.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new outer1_0(outer1_1[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return require(6312) /* getGlobalSingleton */.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new outer1_0(outer1_1[1]).Scope();
    return scope;
  });
};
