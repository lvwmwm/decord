// Module ID: 11821
// Function ID: 11822
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5406, 11822, 2118, 2]
// Exports: default

// Module 11821 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11822, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
