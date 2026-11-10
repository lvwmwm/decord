// Module ID: 12300
// Function ID: 12301
// Name: useCanShareConjureProject
// Dependencies: [10996, 504, 11003, 2]
// Exports: default

// Module 12300 (useCanShareConjureProject)
import ConjurePublishTypes from "ConjurePublishTypes" /* 11003 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10996 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/share/useCanShareConjureProject.tsx");

export default function useCanShareConjureProject(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjurePublishStatusStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
    let publishState;
    if (publishStatus != null) {
      publishState = publishStatus.publishState;
    }
    let isConjureLiveResult = null != publishState;
    if (isConjureLiveResult) {
      const obj = ConjurePublishTypes;
      isConjureLiveResult = obj.isConjureLive(publishState);
    }
    return isConjureLiveResult;
  }, items1);
};
