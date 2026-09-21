// Module ID: 13244
// Function ID: 13245
// Name: BlockedDomainModalActionCreators
// Dependencies: [4725, 13245, 1984, 2]

// Module 13244 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13245, dependencyMap.paths), "blocked-domain", { url });
  }
};
