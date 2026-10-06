// Module ID: 11219
// Function ID: 11220
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4860, 11220, 1987, 2]

// Module 11219 (SuspiciousDownloadModalActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

let obj = {
  show(href) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { href };
    obj.openLazy(asyncRequire(11220, dependencyMap.paths), "suspicious-download", obj2);
  }
};
const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default obj;
