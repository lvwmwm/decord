// Module ID: 11292
// Function ID: 11293
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4809, 11293, 1981, 2]

// Module 11292 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11293, dependencyMap.paths), "suspicious-download", { href });
  }
};
