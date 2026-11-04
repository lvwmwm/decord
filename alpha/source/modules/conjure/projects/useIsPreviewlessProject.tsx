// Module ID: 12329
// Function ID: 12330
// Name: useIsPreviewlessProject
// Dependencies: [6979, 504, 6980, 2]
// Exports: default

// Module 12329 (useIsPreviewlessProject)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6980 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/projects/useIsPreviewlessProject.tsx");

export default function useIsPreviewlessProject(arg0) {
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
};
