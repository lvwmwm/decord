// Module ID: 12485
// Function ID: 12486
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4796, 12486, 1980, 2]

// Module 12485 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12486, dependencyMap.paths), "suspicious-download", { href });
  }
};
