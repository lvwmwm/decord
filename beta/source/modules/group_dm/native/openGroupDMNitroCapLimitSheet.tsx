// Module ID: 12547
// Function ID: 12548
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5542, 12548, 2121, 2]
// Exports: default

// Module 12547 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(12548, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
