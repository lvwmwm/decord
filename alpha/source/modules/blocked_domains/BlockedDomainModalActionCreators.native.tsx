// Module ID: 13246
// Function ID: 13247
// Name: BlockedDomainModalActionCreators
// Dependencies: [4724, 13247, 1980, 2]

// Module 13246 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13247, dependencyMap.paths), "blocked-domain", { url });
  }
};
