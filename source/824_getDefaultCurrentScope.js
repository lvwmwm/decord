// Module ID: 824
// Function ID: 9214
// Name: getDefaultCurrentScope
// Dependencies: [802, 820]

// Module 824 (getDefaultCurrentScope)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return require(802) /* getSentryCarrier */.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new outer1_0(outer1_1[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return require(802) /* getSentryCarrier */.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new outer1_0(outer1_1[1]).Scope();
    return scope;
  });
};
