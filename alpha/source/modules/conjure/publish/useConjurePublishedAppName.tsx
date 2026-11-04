// Module ID: 12870
// Function ID: 12871
// Name: useConjurePublishedAppName
// Dependencies: [2167, 6979, 504, 2]
// Exports: default

// Module 12870 (useConjurePublishedAppName)
import ApplicationStore from "ApplicationStore" /* 2167 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishedAppName.tsx");

export default function useConjurePublishedAppName(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureProjectStore, ApplicationStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let str = "";
    if (null != project) {
      const application = ApplicationStore.getApplication(project.application_id);
      let name;
      if (application != null) {
        name = application.name;
      }
      if (name == null) {
        name = project.name;
      }
      str = name;
    }
    return str;
  });
};
