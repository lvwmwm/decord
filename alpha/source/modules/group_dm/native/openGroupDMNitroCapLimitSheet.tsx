// Module ID: 11091
// Function ID: 11092
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5118, 11092, 2002, 2]
// Exports: default

// Module 11091 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11092, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
