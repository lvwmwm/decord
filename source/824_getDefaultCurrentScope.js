// Module ID: 824
// Function ID: 9213
// Name: getDefaultCurrentScope
// Dependencies: []

// Module 824 (getDefaultCurrentScope)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
