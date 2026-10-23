// Module ID: 11289
// Function ID: 11290
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5208, 11290, 2002, 2]
// Exports: default

// Module 11289 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11290, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
