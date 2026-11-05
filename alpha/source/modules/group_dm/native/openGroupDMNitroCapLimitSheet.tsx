// Module ID: 11833
// Function ID: 11834
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5384, 11834, 2123, 2]
// Exports: default

// Module 11833 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11834, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
