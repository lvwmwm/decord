// Module ID: 182
// Function ID: 2624
// Name: _isNativeReflectConstruct
// Dependencies: [183, 70]

// Module 182 (_isNativeReflectConstruct)
if (true !== global.RN$useAlwaysAvailableJSErrorHandling) {
  const _default = require("_isNativeReflectConstruct").default;
  const result = _default.installConsoleErrorReporter();
  if (!global.__fbDisableExceptionsManager) {
    require("module_70").default.setGlobalHandler(function handleError(arg0, arg1) {
      _default.handleException(arg0, arg1);
    });
    const _default2 = require("module_70").default;
  }
}
