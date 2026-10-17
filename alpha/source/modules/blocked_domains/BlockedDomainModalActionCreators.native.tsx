// Module ID: 13973
// Function ID: 13974
// Name: BlockedDomainModalActionCreators
// Dependencies: [5155, 13974, 2002, 2]

// Module 13973 (BlockedDomainModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

let obj = {
  show(url) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { url };
    obj.openLazy(asyncRequire(13974, dependencyMap.paths), "blocked-domain", obj2);
  }
};
const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default obj;
