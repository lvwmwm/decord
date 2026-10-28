// Module ID: 14240
// Function ID: 14241
// Name: useConjureDevicePermissionSettings
// Dependencies: [19, 10834, 558, 576, 10835, 504, 584, 2]

// Module 14240 (useConjureDevicePermissionSettings)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 10835 */;
import react from "react" /* 19 */;
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore" /* 10834 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureDevicePermissionSettings(applicationId) {
  let first;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = applicationId;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureDevicePermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const fn = function n() {
      const obj = {};
      const CONJURE_DEVICE_PERMISSION_NAMES = conjureDevicePermissions.CONJURE_DEVICE_PERMISSION_NAMES;
      for (const item10010 of CONJURE_DEVICE_PERMISSION_NAMES) {
        obj[item10010] = ConjureDevicePermissionStore.getDecision(applicationId, item10010);
        continue;
      }
      return obj;
    };
    const items1 = [applicationId];
    cResult[1] = applicationId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStoresObject) {
    const prop = tmp(10835).CONJURE_DEVICE_PERMISSION_NAMES;
    const found = prop.filter(tmp(10835).isConjureDevicePermissionSupported);
    const mapped = found.map((permission) => {
      let tmp;
      const obj = { permission, decision: tmp };
      tmp = stateFromStoresObject[permission];
      if (tmp == null) {
        tmp = null;
      }
      return obj;
    });
    cResult[4] = stateFromStoresObject;
    cResult[5] = mapped;
    tmp9 = mapped;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] !== applicationId) {
    function setAllowed(arg0, allowed) {
      let items;
      const obj2 = { type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId, permissions: items, allowed };
      items = [arg0];
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
    cResult[6] = applicationId;
    cResult[7] = setAllowed;
    tmp11 = setAllowed;
  } else {
    tmp11 = cResult[7];
  }
  if (cResult[8] === tmp11) {
    let tmp12;
    if (cResult[9] === tmp9) {
      tmp12 = cResult[10];
    }
    return tmp12;
  }
  let obj2 = { settings: tmp9, setAllowed: tmp11 };
  cResult[8] = tmp11;
  cResult[9] = tmp9;
  cResult[10] = obj2;
  tmp12 = obj2;
}) : (function useConjureDevicePermissionSettings(applicationId) {
  let items2;
  _require = applicationId;
  let obj = require("get initialized");
  let items = [ConjureDevicePermissionStore];
  const items1 = [applicationId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    const CONJURE_DEVICE_PERMISSION_NAMES = conjureDevicePermissions.CONJURE_DEVICE_PERMISSION_NAMES;
    for (const item10010 of CONJURE_DEVICE_PERMISSION_NAMES) {
      obj[item10010] = ConjureDevicePermissionStore.getDecision(applicationId, item10010);
      continue;
    }
    return obj;
  }, items1);
  let obj2 = {
    settings: react.useMemo(() => {
      const prop = conjureDevicePermissions.CONJURE_DEVICE_PERMISSION_NAMES;
      const found = prop.filter(conjureDevicePermissions.isConjureDevicePermissionSupported);
      return found.map((permission) => {
        let tmp;
        const obj = { permission, decision: tmp };
        tmp = stateFromStoresObject[permission];
        if (tmp == null) {
          tmp = null;
        }
        return obj;
      });
    }, items2),
    setAllowed(arg0, allowed) {
      let items;
      const obj2 = { type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId, permissions: items, allowed };
      items = [arg0];
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  };
  items2 = [stateFromStoresObject];
  return obj2;
});
const result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissionSettings.tsx");

export default tmp2;
