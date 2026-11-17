// Module ID: 13620
// Function ID: 13621
// Name: useCanInstallApplication
// Dependencies: [7025, 2165, 504, 11362, 2]
// Exports: default

// Module 13620 (useCanInstallApplication)
import ApplicationInstallUtils from "ApplicationInstallUtils" /* 11362 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/applications/useCanInstallApplication.tsx");

export default function useCanInstallApplication(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ApplicationStore, ConjureProjectStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let result = null != closure_0;
    if (result) {
      const obj = ApplicationInstallUtils;
      result = obj.canInstallApplication(tmp);
    }
    return result;
  }, items1);
};
