// Module ID: 11630
// Function ID: 11631
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5258, 11631, 1994, 2]
// Exports: default

// Module 11630 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11631, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
