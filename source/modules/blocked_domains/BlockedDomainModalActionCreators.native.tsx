// Module ID: 12744
// Function ID: 12745
// Dependencies: [4413, 12745, 2010, 2]

// Module 12744
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { url };
    obj.openLazy(asyncRequireImpl(12745, dependencyMap.paths), "blocked-domain", obj);
  }
};
