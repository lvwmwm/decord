// Module ID: 18281
// Function ID: 18282
// Name: useCanShareConjureProject
// Dependencies: [6621, 6980, 504, 12319, 2]
// Exports: default

// Module 18281 (useCanShareConjureProject)
import ConjureProjectStore2 from "ConjureProjectStore" /* 6621 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 12319 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6980 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require;

const isProjectOwner = ConjureProjectStore2.isProjectOwner;
const result = size.fileFinishedImporting("modules/conjure/share/useCanShareConjureProject.tsx");

export default function useCanShareConjureProject(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureProjectStore, ConjurePublishStatusStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
    let publishState;
    if (publishStatus != null) {
      publishState = publishStatus.publishState;
    }
    let canShare = null != project && null != publishState;
    const tmp4 = null != project && isProjectOwner(project);
    if (canShare) {
      let isConjureLiveResult;
      if (tmp4) {
        isConjureLiveResult = "nothing_built" !== publishState;
      } else {
        const obj = ConjurePublishTypes;
        isConjureLiveResult = obj.isConjureLive(publishState);
      }
      canShare = isConjureLiveResult;
    }
    return { canShare };
  }, items1);
};
