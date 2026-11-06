// Module ID: 11799
// Function ID: 11800
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5404, 11800, 2118, 2]
// Exports: default

// Module 11799 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11800, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
