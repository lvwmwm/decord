// Module ID: 12267
// Function ID: 12268
// Name: useIsPreviewlessProject
// Dependencies: [6964, 504, 6965, 2]
// Exports: default

// Module 12267 (useIsPreviewlessProject)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6965 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;
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
