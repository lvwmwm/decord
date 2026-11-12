// Module ID: 13360
// Function ID: 13361
// Name: useCanInstallApplication
// Dependencies: [6954, 2162, 504, 12605, 2]
// Exports: default

// Module 13360 (useCanInstallApplication)
import ApplicationInstallUtils from "ApplicationInstallUtils" /* 12605 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
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
