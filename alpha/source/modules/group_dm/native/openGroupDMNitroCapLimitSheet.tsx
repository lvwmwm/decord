// Module ID: 11240
// Function ID: 11241
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5192, 11241, 2002, 2]
// Exports: default

// Module 11240 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11241, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
