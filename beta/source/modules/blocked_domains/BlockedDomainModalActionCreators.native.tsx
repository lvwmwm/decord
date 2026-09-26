// Module ID: 13270
// Function ID: 13271
// Name: BlockedDomainModalActionCreators
// Dependencies: [4755, 13271, 1980, 2]

// Module 13270 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13271, dependencyMap.paths), "blocked-domain", { url });
  }
};
