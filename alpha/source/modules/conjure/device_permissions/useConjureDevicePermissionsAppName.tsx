// Module ID: 14759
// Function ID: 14760
// Name: useConjureDevicePermissionsAppName
// Dependencies: [2162, 6924, 504, 6934, 2]
// Exports: default

// Module 14759 (useConjureDevicePermissionsAppName)
import isConjureApplicationDefault from "isConjureApplication" /* 6934 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6924 */;
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
