// Module ID: 14718
// Function ID: 14719
// Name: BlockedDomainModalActionCreators
// Dependencies: [5127, 14719, 2119, 2]

// Module 14718 (BlockedDomainModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

let obj = {
  show(url) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { url };
    obj.openLazy(asyncRequire(14719, dependencyMap.paths), "blocked-domain", obj2);
  }
};
const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default obj;
