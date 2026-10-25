// Module ID: 11804
// Function ID: 11805
// Name: useIsPreviewlessProject
// Dependencies: [6773, 558, 576, 6774, 504, 2]

// Module 11804 (useIsPreviewlessProject)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6774 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPreviewlessProject(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const project = ConjureProjectStore.getProject(closure_0);
      let isPreviewlessProjectResult = null != project;
      if (isPreviewlessProjectResult) {
        const obj = ConjureProjectTypes;
        isPreviewlessProjectResult = obj.isPreviewlessProject(project);
      }
      return isPreviewlessProjectResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function useIsPreviewlessProject(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  return obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let isPreviewlessProjectResult = null != project;
    if (isPreviewlessProjectResult) {
      const obj = ConjureProjectTypes;
      isPreviewlessProjectResult = obj.isPreviewlessProject(project);
    }
    return isPreviewlessProjectResult;
  });
});
const result = size.fileFinishedImporting("modules/conjure/projects/useIsPreviewlessProject.tsx");

export default tmp2;
