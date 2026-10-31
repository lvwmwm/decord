// Module ID: 14547
// Function ID: 14548
// Name: useConjureDevicePermissionSettings
// Dependencies: [19, 10952, 14544, 504, 572, 2]
// Exports: default

// Module 14547 (useConjureDevicePermissionSettings)
import DispatcherDefault from "Dispatcher" /* 572 */;
import react from "react" /* 19 */;
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore" /* 10952 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissionSettings.tsx");

export default function useConjureDevicePermissionSettings(applicationId) {
  let closure_1;
  let items2;
  let stateFromStoresObject;
  _require = applicationId;
  let tmp = require("useConjureDevicePermissions")(applicationId);
  importDefault = tmp;
  let obj = require("get initialized");
  let items = [ConjureDevicePermissionStore];
  const items1 = [applicationId, tmp];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    for (const item10006 of closure_1) {
      obj[item10006] = ConjureDevicePermissionStore.getDecision(applicationId, item10006);
      continue;
    }
    return obj;
  }, items1);
  let obj2 = {
    settings: react.useMemo(() => closure_1.map((permission) => {
      let tmp;
      const obj = { permission, decision: tmp };
      tmp = stateFromStoresObject[permission];
      if (tmp == null) {
        tmp = null;
      }
      return obj;
    }), items2),
    setAllowed(arg0, allowed) {
      let items;
      const obj2 = { type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId, permissions: items, allowed };
      items = [arg0];
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  };
  items2 = [tmp, stateFromStoresObject];
  return obj2;
};
