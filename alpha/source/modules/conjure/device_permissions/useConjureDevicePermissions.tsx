// Module ID: 14506
// Function ID: 14507
// Name: useConjureDevicePermissions
// Dependencies: [6838, 10847, 10933, 504, 10934, 2]
// Exports: default

// Module 14506 (useConjureDevicePermissions)
import conjureDevicePermissions from "conjureDevicePermissions" /* 10934 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore" /* 10933 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, publishStatus;

let result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissions.tsx");

export default function useConjureDevicePermissions(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureProjectStore, ConjurePublishStatusStore, ConjureDevicePermissionStore];
  const items1 = [arg0];
  return obj.useStateFromStoresArray(items, () => {
    let prop;
    if (null == prop) {
      return [];
    } else {
      let result = ConjureProjectStore.findProjectByApplicationId(tmp);
      let tmp2;
      if (null != result) {
        if (result.preview_application_id === prop) {
          publishStatus = publishStatus.getPublishStatus(result.id);
          prop = undefined;
          if (publishStatus != null) {
            prop = publishStatus.previewDevicePermissions;
          }
          tmp2 = prop;
        }
      }
      prop = tmp2;
      const prop1 = closure_0(dependencyMap[4]).CONJURE_DEVICE_PERMISSION_NAMES;
      return prop1.filter((item) => {
        const obj = conjureDevicePermissions;
        let result = obj.isConjureDevicePermissionSupported(item);
        if (result) {
          let tmp5 = null != ConjureDevicePermissionStore.getDecision(closure_0, item);
          if (!tmp5) {
            let flag;
            const obj2 = prop;
            if (prop != null) {
              flag = obj2.includes(item);
            }
            if (flag == null) {
              flag = false;
            }
            tmp5 = flag;
          }
          result = tmp5;
        }
        return result;
      });
    }
  }, items1);
};
