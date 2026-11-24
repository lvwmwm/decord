// Module ID: 12918
// Function ID: 12919
// Name: useCanInstallApplication
// Dependencies: [6808, 2164, 504, 9958, 2]
// Exports: default

// Module 12918 (useCanInstallApplication)
import ApplicationInstallUtils from "ApplicationInstallUtils" /* 9958 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
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
