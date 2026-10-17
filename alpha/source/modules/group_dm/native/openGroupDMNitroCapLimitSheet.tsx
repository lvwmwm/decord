// Module ID: 11151
// Function ID: 11152
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5155, 11152, 2002, 2]
// Exports: default

// Module 11151 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11152, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
