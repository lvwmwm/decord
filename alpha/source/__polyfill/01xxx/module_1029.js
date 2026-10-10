// Module ID: 1029
// Function ID: 1030
// Dependencies: [878, 693, 873, 1030]
// Exports: appRegistryIntegration, getAppRegistryIntegration

// Module 1029
import _mod693 from "module_693" /* 693 */;
import ReactNativeLibraries from "ReactNativeLibraries" /* 873 */;
import _mod878 from "module_878" /* 878 */;

let tmp;
const fillTyped = tmp(1030);
const f84297 = (arg0) => {
  closure_0 = arg0;
  return () => {
    const items = [...arguments];
    const item = closure_0.forEach((fn) => fn());
    return closure_0(...items);
  };
};
let AppRegistry = "AppRegistry";
function patchAppRegistryRunApplication(arg0) {
  let closure_0 = arg0;
  AppRegistry = ReactNativeLibraries.ReactNativeLibraries.AppRegistry;
  if (AppRegistry) {
    const tmpResult = fillTyped;
    tmpResult.fillTyped(AppRegistry, "runApplication", f84297);
  }
}

export const INTEGRATION_NAME = "AppRegistry";
export const appRegistryIntegration = () => {
  let closure_0 = [];
  let obj = {
    name: AppRegistry,
    setupOnce() {
      const obj = _mod878;
      if (!obj.isWeb()) {
        if (typeof patchAppRegistryRunApplication === "function") {
          AppRegistry = tmp(873).ReactNativeLibraries.AppRegistry;
          if (AppRegistry) {
            const tmpResult = fillTyped;
            tmpResult.fillTyped(AppRegistry, "runApplication", f84297);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    onRunApplication(onRunApplicationHook) {
      const arr = closure_0;
      if (closure_0.includes(onRunApplicationHook)) {
        const debug = _mod693.debug;
        debug.log("[AppRegistryIntegration] Callback already registered.");
      } else {
        arr.push(onRunApplicationHook);
      }
    }
  };
  return obj;
};
export { patchAppRegistryRunApplication };
export const getAppRegistryIntegration = () => {
  let client = arg0;
  if (arg0 === undefined) {
    const obj2 = _mod693;
    client = obj2.getClient();
  }
  if (client) {
    return client.getIntegrationByName(AppRegistry);
  }
};
