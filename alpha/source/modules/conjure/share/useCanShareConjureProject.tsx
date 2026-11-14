// Module ID: 13193
// Function ID: 13194
// Name: useCanShareConjureProject
// Dependencies: [7377, 504, 7384, 2]
// Exports: default

// Module 13193 (useCanShareConjureProject)
import ConjurePublishTypes from "ConjurePublishTypes" /* 7384 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;
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
