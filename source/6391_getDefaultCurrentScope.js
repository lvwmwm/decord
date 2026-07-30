// Module ID: 6391
// Function ID: 6392
// Name: getDefaultCurrentScope
// Dependencies: [6366, 6386]

// Module 6391 (getDefaultCurrentScope)
const require = arg1;
const dependencyMap = arg6;
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return require(6366) /* getGlobalSingleton */.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return require(6366) /* getGlobalSingleton */.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
