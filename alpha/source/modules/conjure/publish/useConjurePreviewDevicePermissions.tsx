// Module ID: 14564
// Function ID: 14565
// Name: useConjurePreviewDevicePermissions
// Dependencies: [7387, 504, 2]
// Exports: default

// Module 14564 (useConjurePreviewDevicePermissions)
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7387 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = [];
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePreviewDevicePermissions.tsx");

export default function useConjurePreviewDevicePermissions(arg0) {
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
};
