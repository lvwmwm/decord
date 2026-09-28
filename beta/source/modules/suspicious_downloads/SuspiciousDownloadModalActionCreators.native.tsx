// Module ID: 12502
// Function ID: 12503
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4800, 12503, 1981, 2]

// Module 12502 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12503, dependencyMap.paths), "suspicious-download", { href });
  }
};
