// Module ID: 12455
// Function ID: 12456
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5489, 12456, 2118, 2]
// Exports: default

// Module 12455 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(12456, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
