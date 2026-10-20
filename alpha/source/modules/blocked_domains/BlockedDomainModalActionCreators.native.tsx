// Module ID: 14028
// Function ID: 14029
// Name: BlockedDomainModalActionCreators
// Dependencies: [5171, 14029, 2002, 2]

// Module 14028 (BlockedDomainModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

let obj = {
  show(url) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { url };
    obj.openLazy(asyncRequire(14029, dependencyMap.paths), "blocked-domain", obj2);
  }
};
const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default obj;
