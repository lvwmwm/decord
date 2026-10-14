// Module ID: 11217
// Function ID: 11218
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4854, 11218, 1987, 2]
// Exports: default

// Module 11217 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11218, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
