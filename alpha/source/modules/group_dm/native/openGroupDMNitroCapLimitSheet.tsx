// Module ID: 12103
// Function ID: 12104
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5257, 12104, 2120, 2]
// Exports: default

// Module 12103 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(12104, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
