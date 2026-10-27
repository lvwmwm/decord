// Module ID: 11300
// Function ID: 11301
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5211, 11301, 1999, 2]
// Exports: default

// Module 11300 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11301, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
