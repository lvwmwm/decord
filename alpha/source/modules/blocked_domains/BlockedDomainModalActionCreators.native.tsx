// Module ID: 12992
// Function ID: 12993
// Name: BlockedDomainModalActionCreators
// Dependencies: [5055, 12993, 2000, 2]

// Module 12992 (BlockedDomainModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

let obj = {
  show(url) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { url };
    obj.openLazy(asyncRequire(12993, dependencyMap.paths), "blocked-domain", obj2);
  }
};
const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default obj;
