// Module ID: 10753
// Function ID: 10754
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5056, 10754, 2000, 2]
// Exports: default

// Module 10753 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(10754, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
