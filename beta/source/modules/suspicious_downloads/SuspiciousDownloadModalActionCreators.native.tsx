// Module ID: 13242
// Function ID: 13243
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4725, 13243, 1984, 2]

// Module 13242 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13243, dependencyMap.paths), "suspicious-download", { href });
  }
};
