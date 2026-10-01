// Module ID: 12713
// Function ID: 12714
// Name: BlockedDomainModalActionCreators
// Dependencies: [4809, 12714, 1981, 2]

// Module 12713 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12714, dependencyMap.paths), "blocked-domain", { url });
  }
};
