// Module ID: 11076
// Function ID: 11077
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5115, 11077, 2000, 2]
// Exports: default

// Module 11076 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11077, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
