// Module ID: 13239
// Function ID: 13240
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4723, 13240, 1980, 2]

// Module 13239 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13240, dependencyMap.paths), "suspicious-download", { href });
  }
};
