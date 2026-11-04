// Module ID: 11809
// Function ID: 11810
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [5382, 11810, 2123, 2]

// Module 11809 (SuspiciousDownloadModalActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

let obj = {
  show(href) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { href };
    obj.openLazy(asyncRequire(11810, dependencyMap.paths), "suspicious-download", obj2);
  }
};
const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default obj;
