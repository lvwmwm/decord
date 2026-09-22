// Module ID: 13080
// Function ID: 13081
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4603, 13081, 1896, 2]

// Module 13080 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13081, dependencyMap.paths), "suspicious-download", { href });
  }
};
