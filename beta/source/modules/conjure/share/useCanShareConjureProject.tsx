// Module ID: 12291
// Function ID: 12292
// Name: useCanShareConjureProject
// Dependencies: [10987, 504, 10994, 2]
// Exports: default

// Module 12291 (useCanShareConjureProject)
import ConjurePublishTypes from "ConjurePublishTypes" /* 10994 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10987 */;
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
