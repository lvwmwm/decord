// Module ID: 1113
// Function ID: 12669
// Name: isAtLeastReact17
// Dependencies: [31, 794, 1000]
// Exports: reactErrorHandler

// Module 1113 (isAtLeastReact17)
import result from "result";

function isAtLeastReact17(version) {
  const match = version.match(/^([^.]+)/);
  let tmp2 = null !== match;
  if (tmp2) {
    const _parseInt = parseInt;
    tmp2 = parseInt(match[0]) >= 17;
  }
  return tmp2;
}
function setCause(closure_0, error) {
  const weakSet = new WeakSet();
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
  !recurse(closure_0, error);
}
function captureReactException(closure_0, closure_1, arg2) {
  const _require = closure_0;
  const dependencyMap = arg2;
  const componentStack = closure_1.componentStack;
  if (isAtLeastReact17(componentStack.version)) {
    if (obj.isError(closure_0)) {
      if (componentStack) {
        const _Error = Error;
        const error = new Error(closure_0.message);
        const _HermesInternal = HermesInternal;
        error.name = "React ErrorBoundary " + closure_0.name;
        error.stack = componentStack;
        setCause(closure_0, error);
      }
    }
    obj = _require(794);
  }
  return _require(1000).withScope((setContext) => {
    setContext.setContext("react", { componentStack });
    return callback(table[2]).captureException(callback, table);
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { captureReactException };
export { isAtLeastReact17 };
export function reactErrorHandler(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1) => {
    if (!!callback) {
      callback(arg0, arg1, tmp2);
    }
  };
}
export { setCause };
