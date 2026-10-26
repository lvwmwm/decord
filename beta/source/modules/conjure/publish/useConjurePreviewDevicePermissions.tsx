// Module ID: 12297
// Function ID: 12298
// Name: useConjurePreviewDevicePermissions
// Dependencies: [10714, 558, 576, 504, 2]

// Module 12297 (useConjurePreviewDevicePermissions)
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10714 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = [];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePreviewDevicePermissions(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjurePublishStatusStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
      let prop;
      if (publishStatus != null) {
        prop = publishStatus.previewDevicePermissions;
      }
      if (prop == null) {
        prop = closure_3;
      }
      return prop;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function useConjurePreviewDevicePermissions(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjurePublishStatusStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
    let prop;
    if (publishStatus != null) {
      prop = publishStatus.previewDevicePermissions;
    }
    if (prop == null) {
      prop = closure_3;
    }
    return prop;
  });
});
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePreviewDevicePermissions.tsx");

export default tmp2;
