// Module ID: 1129
// Function ID: 12893
// Name: patchAppRegistryRunApplication
// Dependencies: [978, 794, 973, 1130]

// Module 1129 (patchAppRegistryRunApplication)
const require = arg1;
const dependencyMap = arg6;
function patchAppRegistryRunApplication(arg0) {
  const _require = arg0;
  const AppRegistry = _require(973).ReactNativeLibraries.AppRegistry;
  if (AppRegistry) {
    _require(1130).fillTyped(AppRegistry, "runApplication", (arg0) => {
      let closure_0 = arg0;
      return () => {
        const item = lib.forEach((arg0) => arg0());
        return lib(...arguments);
      };
    });
    const obj = _require(1130);
  }
}
arg5.INTEGRATION_NAME = "AppRegistry";
arg5.appRegistryIntegration = function appRegistryIntegration() {
  let closure_0 = [];
  return {
    name: "AppRegistry",
    setupOnce() {
      if (!obj.isWeb()) {
        outer1_2(arr);
      }
    },
    onRunApplication(onRunApplicationHook) {
      if (arr.includes(onRunApplicationHook)) {
        const debug = arr(outer1_1[1]).debug;
        debug.log("[AppRegistryIntegration] Callback already registered.");
      } else {
        arr = arr.push(onRunApplicationHook);
      }
    }
  };
};
arg5.patchAppRegistryRunApplication = patchAppRegistryRunApplication;
arg5.getAppRegistryIntegration = function getAppRegistryIntegration(client) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    if (first) {
      return first.getIntegrationByName("AppRegistry");
    }
  }
  first = require(794) /* registerSpanErrorInstrumentation */.getClient();
};
