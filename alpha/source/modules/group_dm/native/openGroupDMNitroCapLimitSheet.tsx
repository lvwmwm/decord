// Module ID: 11391
// Function ID: 11392
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5247, 11392, 2000, 2]
// Exports: default

// Module 11391 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11392, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
