// Module ID: 1129
// Function ID: 12892
// Name: patchAppRegistryRunApplication
// Dependencies: []

// Module 1129 (patchAppRegistryRunApplication)
function patchAppRegistryRunApplication(arg0) {
  const arg1 = arg0;
  const AppRegistry = arg1(arg6[2]).ReactNativeLibraries.AppRegistry;
  if (AppRegistry) {
    arg1(arg6[3]).fillTyped(AppRegistry, "runApplication", (arg0) => (self) => {
      const item = self.forEach((arg0) => arg0());
      return self(...arguments);
    });
    const obj = arg1(arg6[3]);
  }
}
arg5.INTEGRATION_NAME = "AppRegistry";
arg5.appRegistryIntegration = function appRegistryIntegration() {
  let closure_0 = [];
  return {
    name: "AppRegistry",
    setupOnce() {
      if (!obj.isWeb()) {
        callback(arr);
      }
    },
    onRunApplication(onRunApplicationHook) {
      if (arr.includes(onRunApplicationHook)) {
        const debug = arr(closure_1[1]).debug;
        debug.log("[AppRegistryIntegration] Callback already registered.");
      } else {
        const arr = arr.push(onRunApplicationHook);
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
  first = arg1(arg6[1]).getClient();
};
