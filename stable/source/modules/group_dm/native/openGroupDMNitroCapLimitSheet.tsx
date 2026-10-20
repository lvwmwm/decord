// Module ID: 10754
// Function ID: 10755
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5056, 10755, 2000, 2]
// Exports: default

// Module 10754 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(10755, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
