// Module ID: 18395
// Function ID: 18396
// Name: useUsesPreviewApp
// Dependencies: [6500, 504, 6501, 2]
// Exports: default

// Module 18395 (useUsesPreviewApp)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6501 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/projects/useUsesPreviewApp.tsx");

export default function useUsesPreviewApp(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  return obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let usesPreviewAppResult = null == project;
    if (!usesPreviewAppResult) {
      const obj = ConjureProjectTypes;
      usesPreviewAppResult = obj.usesPreviewApp(project);
    }
    return usesPreviewAppResult;
  });
};
