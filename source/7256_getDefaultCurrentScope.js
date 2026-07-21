// Module ID: 7256
// Function ID: 58454
// Name: getDefaultCurrentScope
// Dependencies: [0, 0]

// Module 7256 (getDefaultCurrentScope)
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
