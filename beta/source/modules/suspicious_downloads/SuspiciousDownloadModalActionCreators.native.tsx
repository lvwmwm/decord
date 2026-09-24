// Module ID: 13278
// Function ID: 13279
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4757, 13279, 1984, 2]

// Module 13278 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13279, dependencyMap.paths), "suspicious-download", { href });
  }
};
