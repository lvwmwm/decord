// Module ID: 12025
// Function ID: 12026
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5037, 12026, 2121, 2]
// Exports: default

// Module 12025 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(12026, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
