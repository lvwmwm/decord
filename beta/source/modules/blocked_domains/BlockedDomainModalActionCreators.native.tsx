// Module ID: 13280
// Function ID: 13281
// Name: BlockedDomainModalActionCreators
// Dependencies: [4757, 13281, 1984, 2]

// Module 13280 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13281, dependencyMap.paths), "blocked-domain", { url });
  }
};
