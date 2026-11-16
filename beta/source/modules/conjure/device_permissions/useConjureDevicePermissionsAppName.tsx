// Module ID: 15623
// Function ID: 15624
// Name: useConjureDevicePermissionsAppName
// Dependencies: [2165, 7017, 504, 7028, 2]
// Exports: default

// Module 15623 (useConjureDevicePermissionsAppName)
import isConjureApplicationDefault from "isConjureApplication" /* 7028 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissionsAppName.tsx");

export default function useConjureDevicePermissionsAppName(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ApplicationStore, ConjureProjectStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (isConjureApplicationDefault(closure_0)) {
        const application = ApplicationStore.getApplication(tmp);
        let name;
        if (application != null) {
          name = application.name;
        }
        if (name == null) {
          const result = ConjureProjectStore.findProjectByApplicationId(tmp);
          let name1;
          if (result != null) {
            name1 = result.name;
          }
          name = name1;
        }
        if (name == null) {
          name = null;
        }
        tmp2 = name;
      }
    }
    return tmp2;
  }, items1);
};
