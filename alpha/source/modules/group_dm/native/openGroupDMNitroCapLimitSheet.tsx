// Module ID: 11337
// Function ID: 11338
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5246, 11338, 1999, 2]
// Exports: default

// Module 11337 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11338, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
