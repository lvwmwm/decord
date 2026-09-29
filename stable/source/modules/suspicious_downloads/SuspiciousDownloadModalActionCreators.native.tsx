// Module ID: 13268
// Function ID: 13269
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4755, 13269, 1980, 2]

// Module 13268 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13269, dependencyMap.paths), "suspicious-download", { href });
  }
};
