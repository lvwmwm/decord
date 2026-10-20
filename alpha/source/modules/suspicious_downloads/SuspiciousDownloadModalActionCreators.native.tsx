// Module ID: 11174
// Function ID: 11175
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [5171, 11175, 2002, 2]

// Module 11174 (SuspiciousDownloadModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

let obj = {
  show(href) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { href };
    obj.openLazy(asyncRequire(11175, dependencyMap.paths), "suspicious-download", obj2);
  }
};
const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default obj;
