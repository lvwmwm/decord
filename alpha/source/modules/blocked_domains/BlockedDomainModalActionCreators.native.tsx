// Module ID: 13328
// Function ID: 13329
// Name: BlockedDomainModalActionCreators
// Dependencies: [4794, 13329, 1980, 2]

// Module 13328 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13329, dependencyMap.paths), "blocked-domain", { url });
  }
};
