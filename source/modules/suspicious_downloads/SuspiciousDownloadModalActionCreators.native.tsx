// Module ID: 13031
// Function ID: 13032
// Dependencies: [4445, 13032, 2008, 2]

// Module 13031
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { href };
    obj.openLazy(asyncRequireImpl(13032, dependencyMap.paths), "suspicious-download", obj);
  }
};
