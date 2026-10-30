// Module ID: 12437
// Function ID: 12438
// Name: useIsPreviewlessProject
// Dependencies: [6838, 504, 6839, 2]
// Exports: default

// Module 12437 (useIsPreviewlessProject)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6839 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
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
