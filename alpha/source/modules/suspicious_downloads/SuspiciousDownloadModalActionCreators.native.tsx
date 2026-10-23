// Module ID: 11278
// Function ID: 11279
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [5208, 11279, 2002, 2]

// Module 11278 (SuspiciousDownloadModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

let obj = {
  show(href) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { href };
    obj.openLazy(asyncRequire(11279, dependencyMap.paths), "suspicious-download", obj2);
  }
};
const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default obj;
