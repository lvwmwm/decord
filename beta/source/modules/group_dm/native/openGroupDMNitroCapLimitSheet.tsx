// Module ID: 10958
// Function ID: 10959
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4801, 10959, 1987, 2]
// Exports: default

// Module 10958 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(10959, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
