// Module ID: 14511
// Function ID: 14512
// Name: useUsesPreviewApp
// Dependencies: [7025, 504, 7026, 2]
// Exports: default

// Module 14511 (useUsesPreviewApp)
import ConjureProjectTypes from "ConjureProjectTypes" /* 7026 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;
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
