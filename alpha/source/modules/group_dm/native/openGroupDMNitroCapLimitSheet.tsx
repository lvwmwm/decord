// Module ID: 12002
// Function ID: 12003
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5006, 12003, 2121, 2]
// Exports: default

// Module 12002 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(12003, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
