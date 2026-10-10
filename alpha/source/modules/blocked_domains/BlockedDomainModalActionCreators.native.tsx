// Module ID: 13039
// Function ID: 13040
// Name: BlockedDomainModalActionCreators
// Dependencies: [5056, 13040, 2000, 2]

// Module 13039 (BlockedDomainModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

let obj = {
  show(url) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { url };
    obj.openLazy(asyncRequire(13040, dependencyMap.paths), "blocked-domain", obj2);
  }
};
const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default obj;
