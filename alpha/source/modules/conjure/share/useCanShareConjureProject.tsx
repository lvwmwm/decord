// Module ID: 18309
// Function ID: 18310
// Name: useCanShareConjureProject
// Dependencies: [6500, 6860, 504, 6867, 2]
// Exports: default

// Module 18309 (useCanShareConjureProject)
import ConjureProjectStore2 from "ConjureProjectStore" /* 6500 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 6867 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6860 */;
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
    const tmp4 = null != project && isProjectOwner(project);
    let tmp6 = null != project && null != publishState;
    if (tmp6) {
      let isConjureLiveResult;
      if (tmp4) {
        isConjureLiveResult = "nothing_built" !== publishState;
      } else {
        const obj = ConjurePublishTypes;
        isConjureLiveResult = obj.isConjureLive(publishState);
      }
      tmp6 = isConjureLiveResult;
    }
    const obj2 = { canShare: tmp6, firstShare: tmp6 };
    if (tmp6) {
      tmp6 = tmp4;
    }
    if (tmp6) {
      tmp6 = "user" === project.install_scope;
    }
    return obj2;
  }, items1);
};
