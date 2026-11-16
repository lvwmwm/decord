// Module ID: 11822
// Function ID: 11823
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5406, 11823, 2118, 2]
// Exports: default

// Module 11822 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11823, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
