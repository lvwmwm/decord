// Module ID: 13335
// Function ID: 13336
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4796, 13336, 1980, 2]

// Module 13335 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13336, dependencyMap.paths), "suspicious-download", { href });
  }
};
