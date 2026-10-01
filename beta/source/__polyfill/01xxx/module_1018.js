// Module ID: 1018
// Function ID: 1019
// Dependencies: [867, 682, 862, 1019]
// Exports: appRegistryIntegration, getAppRegistryIntegration

// Module 1018
import _mod682 from "module_682" /* 682 */;
import ReactNativeLibraries from "ReactNativeLibraries" /* 862 */;
import _mod867 from "module_867" /* 867 */;

let tmp;
const fillTyped = tmp(1019);
const f72947 = (arg0) => {
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
    tmpResult.fillTyped(AppRegistry, "runApplication", f72947);
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
            tmpResult.fillTyped(AppRegistry, "runApplication", f72947);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    onRunApplication(onRunApplicationHook) {
      const arr = closure_0;
      if (closure_0.includes(onRunApplicationHook)) {
        const debug = _mod682.debug;
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
    const obj2 = _mod682;
    client = obj2.getClient();
  }
  if (client) {
    return client.getIntegrationByName(AppRegistry);
  }
};
