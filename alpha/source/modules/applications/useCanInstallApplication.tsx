// Module ID: 13102
// Function ID: 13103
// Name: useCanInstallApplication
// Dependencies: [6934, 2165, 504, 10100, 2]
// Exports: default

// Module 13102 (useCanInstallApplication)
import ApplicationInstallUtils from "ApplicationInstallUtils" /* 10100 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;
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
