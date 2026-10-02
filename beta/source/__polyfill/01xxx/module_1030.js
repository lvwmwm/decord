// Module ID: 1030
// Function ID: 1031
// Dependencies: [879, 694, 874, 1031]
// Exports: appRegistryIntegration, getAppRegistryIntegration

// Module 1030
import _mod694 from "module_694" /* 694 */;
import ReactNativeLibraries from "ReactNativeLibraries" /* 874 */;
import _mod879 from "module_879" /* 879 */;

let tmp;
const fillTyped = tmp(1031);
const f81815 = (arg0) => {
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
    tmpResult.fillTyped(AppRegistry, "runApplication", f81815);
  }
}

export const INTEGRATION_NAME = "AppRegistry";
export const appRegistryIntegration = () => {
  let closure_0 = [];
  let obj = {
    name: AppRegistry,
    setupOnce() {
      const obj = _mod879;
      if (!obj.isWeb()) {
        if (typeof patchAppRegistryRunApplication === "function") {
          AppRegistry = tmp(874).ReactNativeLibraries.AppRegistry;
          if (AppRegistry) {
            const tmpResult = fillTyped;
            tmpResult.fillTyped(AppRegistry, "runApplication", f81815);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    onRunApplication(onRunApplicationHook) {
      const arr = closure_0;
      if (closure_0.includes(onRunApplicationHook)) {
        const debug = _mod694.debug;
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
    const obj2 = _mod694;
    client = obj2.getClient();
  }
  if (client) {
    return client.getIntegrationByName(AppRegistry);
  }
};
