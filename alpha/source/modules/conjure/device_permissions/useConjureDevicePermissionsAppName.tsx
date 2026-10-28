// Module ID: 14237
// Function ID: 14238
// Name: useConjureDevicePermissionsAppName
// Dependencies: [2042, 6808, 558, 576, 6818, 504, 2]

// Module 14237 (useConjureDevicePermissionsAppName)
import isConjureApplicationDefault from "isConjureApplication" /* 6818 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureDevicePermissionsAppName(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore, ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : (function useConjureDevicePermissionsAppName(arg0) {
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
});
let result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissionsAppName.tsx");

export default tmp2;
