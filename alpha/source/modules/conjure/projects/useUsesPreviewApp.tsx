// Module ID: 12336
// Function ID: 12337
// Name: useUsesPreviewApp
// Dependencies: [6982, 504, 6983, 2]
// Exports: default

// Module 12336 (useUsesPreviewApp)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6983 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6982 */;
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
