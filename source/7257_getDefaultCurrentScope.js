// Module ID: 7257
// Function ID: 58466
// Name: getDefaultCurrentScope
// Dependencies: [0, 0]

// Module 7257 (getDefaultCurrentScope)
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return arg1(arg6[0]).getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new callback(closure_1[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return arg1(arg6[0]).getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new callback(closure_1[1]).Scope();
    return scope;
  });
};
