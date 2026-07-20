// Module ID: 275
// Function ID: 3429
// Name: getExtendedError
// Dependencies: [0, 0]
// Exports: onCaughtError, onRecoverableError, onUncaughtError

// Module 275 (getExtendedError)
import "result";

function getExtendedError(value, componentStack) {
  if (value instanceof Error) {
    value.componentStack = componentStack.componentStack;
    value.isComponentError = true;
  } else if ("string" === typeof value) {
    const SyntheticError2 = componentStack(dependencyMap[1]).SyntheticError;
    const prototype2 = SyntheticError2.prototype;
    let syntheticError2 = new SyntheticError2(value);
  } else {
    const SyntheticError = componentStack(dependencyMap[1]).SyntheticError;
    const prototype = SyntheticError.prototype;
    syntheticError2 = new SyntheticError("Unspecified error");
  }
}

export const onUncaughtError = function onUncaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  importDefault(dependencyMap[1]).handleException(tmp, true);
};
export const onCaughtError = function onCaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  importDefault(dependencyMap[1]).handleException(tmp, false);
};
export const onRecoverableError = function onRecoverableError(value, componentStack) {
  console.warn(getExtendedError(value, componentStack));
};
