// Module ID: 182
// Function ID: 2624
// Dependencies: []

// Module 182
if (true !== global.RN$useAlwaysAvailableJSErrorHandling) {
  const _default = require(dependencyMap[0]).default;
  const result = _default.installConsoleErrorReporter();
  if (!global.__fbDisableExceptionsManager) {
    require(dependencyMap[1]).default.setGlobalHandler(function handleError(arg0, arg1) {
      _default.handleException(arg0, arg1);
    });
    const _default2 = require(dependencyMap[1]).default;
  }
}
