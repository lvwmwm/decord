// Module ID: 11345
// Function ID: 11346
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5054, 11346, 1999, 2]
// Exports: default

// Module 11345 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11346, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
