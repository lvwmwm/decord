// Module ID: 16691
// Function ID: 16692
// Name: useVibegrationsPublishedAppName
// Dependencies: [5118, 8699, 558, 576, 504, 2]

// Module 16691 (useVibegrationsPublishedAppName)
import ApplicationStore from "ApplicationStore" /* 5118 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsProjectStore, ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const project = VibegrationsProjectStore.getProject(closure_0);
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [VibegrationsProjectStore, ApplicationStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const project = VibegrationsProjectStore.getProject(closure_0);
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
});
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPublishedAppName.tsx");

export default tmp2;
