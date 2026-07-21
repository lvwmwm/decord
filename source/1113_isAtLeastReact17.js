// Module ID: 1113
// Function ID: 12667
// Name: isAtLeastReact17
// Dependencies: []
// Exports: reactErrorHandler

// Module 1113 (isAtLeastReact17)
function isAtLeastReact17(version) {
  const match = version.match(/^([^.]+)/);
  let tmp2 = null !== match;
  if (tmp2) {
    const _parseInt = parseInt;
    tmp2 = parseInt(match[0]) >= 17;
  }
  return tmp2;
}
function setCause(message, error) {
  const weakSet = new WeakSet();
  const require = weakSet;
  function recurse(cause, cause2) {
    if (!weakSet.has(cause)) {
      if (cause.cause) {
        weakSet.add(cause);
        const tmp = recurse(cause.cause, cause2);
      } else {
        cause.cause = cause2;
      }
      return tmp;
    }
  }
  const dependencyMap = recurse;
  !recurse(message, error);
}
function captureReactException(message, componentStack, arg2) {
  const require = message;
  const dependencyMap = arg2;
  componentStack = componentStack.componentStack;
  const version = componentStack;
  if (isAtLeastReact17(version.version)) {
    if (obj.isError(message)) {
      if (componentStack) {
        const _Error = Error;
        const error = new Error(message.message);
        const _HermesInternal = HermesInternal;
        error.name = "React ErrorBoundary " + message.name;
        error.stack = componentStack;
        setCause(message, error);
      }
    }
    const obj = require(dependencyMap[1]);
  }
  return require(dependencyMap[2]).withScope((setContext) => {
    setContext.setContext("react", { componentStack });
    return setContext(arg2[2]).captureException(setContext, arg2);
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = require(dependencyMap[0]);

export { captureReactException };
export { isAtLeastReact17 };
export function reactErrorHandler(arg0) {
  const require = arg0;
  return (arg0, arg1) => {
    if (!!arg0) {
      arg0(arg0, arg1, tmp2);
    }
  };
}
export { setCause };
