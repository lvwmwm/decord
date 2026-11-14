// Module ID: 12545
// Function ID: 12546
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5552, 12546, 2121, 2]
// Exports: default

// Module 12545 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(12546, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
