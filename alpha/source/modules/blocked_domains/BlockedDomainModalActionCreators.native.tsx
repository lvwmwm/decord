// Module ID: 12487
// Function ID: 12488
// Name: BlockedDomainModalActionCreators
// Dependencies: [4796, 12488, 1980, 2]

// Module 12487 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12488, dependencyMap.paths), "blocked-domain", { url });
  }
};
