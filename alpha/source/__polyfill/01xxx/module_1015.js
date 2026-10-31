// Module ID: 1015
// Function ID: 1016
// Dependencies: [867, 681, 862, 1016]
// Exports: appRegistryIntegration, getAppRegistryIntegration

// Module 1015
import _mod681 from "module_681" /* 681 */;
import ReactNativeLibraries from "ReactNativeLibraries" /* 862 */;
import _mod867 from "module_867" /* 867 */;

let tmp;
const fillTyped = tmp(1016);
const f80223 = (arg0) => {
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
    tmpResult.fillTyped(AppRegistry, "runApplication", f80223);
  }
}

export const INTEGRATION_NAME = "AppRegistry";
export const appRegistryIntegration = () => {
  let closure_0 = [];
  let obj = {
    name: AppRegistry,
    setupOnce() {
      const obj = _mod867;
      if (!obj.isWeb()) {
        if (typeof patchAppRegistryRunApplication === "function") {
          AppRegistry = tmp(862).ReactNativeLibraries.AppRegistry;
          if (AppRegistry) {
            const tmpResult = fillTyped;
            tmpResult.fillTyped(AppRegistry, "runApplication", f80223);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    onRunApplication(onRunApplicationHook) {
      const arr = closure_0;
      if (closure_0.includes(onRunApplicationHook)) {
        const debug = _mod681.debug;
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
    const obj2 = _mod681;
    client = obj2.getClient();
  }
  if (client) {
    return client.getIntegrationByName(AppRegistry);
  }
};
