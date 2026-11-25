// Module ID: 12069
// Function ID: 12070
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5127, 12070, 2119, 2]
// Exports: default

// Module 12069 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(12070, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
