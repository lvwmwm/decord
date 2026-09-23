// Module ID: 13326
// Function ID: 13327
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4794, 13327, 1980, 2]

// Module 13326 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13327, dependencyMap.paths), "suspicious-download", { href });
  }
};
