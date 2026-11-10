// Module ID: 11784
// Function ID: 11785
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [5376, 11785, 2118, 2]

// Module 11784 (SuspiciousDownloadModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

let obj = {
  show(href) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { href };
    obj.openLazy(asyncRequire(11785, dependencyMap.paths), "suspicious-download", obj2);
  }
};
const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default obj;
