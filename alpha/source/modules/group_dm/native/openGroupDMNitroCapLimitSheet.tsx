// Module ID: 11594
// Function ID: 11595
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5253, 11595, 1995, 2]
// Exports: default

// Module 11594 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11595, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
