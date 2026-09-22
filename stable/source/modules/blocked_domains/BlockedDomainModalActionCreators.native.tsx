// Module ID: 13082
// Function ID: 13083
// Name: BlockedDomainModalActionCreators
// Dependencies: [4603, 13083, 1896, 2]

// Module 13082 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13083, dependencyMap.paths), "blocked-domain", { url });
  }
};
