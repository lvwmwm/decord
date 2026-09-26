// Module ID: 12504
// Function ID: 12505
// Name: BlockedDomainModalActionCreators
// Dependencies: [4800, 12505, 1981, 2]

// Module 12504 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12505, dependencyMap.paths), "blocked-domain", { url });
  }
};
