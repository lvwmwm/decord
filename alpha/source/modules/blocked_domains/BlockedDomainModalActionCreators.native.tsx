// Module ID: 12704
// Function ID: 12705
// Name: BlockedDomainModalActionCreators
// Dependencies: [4830, 12705, 1981, 2]

// Module 12704 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12705, dependencyMap.paths), "blocked-domain", { url });
  }
};
