// Module ID: 12674
// Function ID: 12675
// Name: BlockedDomainModalActionCreators
// Dependencies: [4800, 12675, 1981, 2]

// Module 12674 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12675, dependencyMap.paths), "blocked-domain", { url });
  }
};
