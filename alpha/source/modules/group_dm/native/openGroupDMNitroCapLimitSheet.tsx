// Module ID: 12449
// Function ID: 12450
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5489, 12450, 2118, 2]
// Exports: default

// Module 12449 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(12450, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
