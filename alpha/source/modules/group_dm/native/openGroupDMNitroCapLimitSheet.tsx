// Module ID: 11293
// Function ID: 11294
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5210, 11294, 2002, 2]
// Exports: default

// Module 11293 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11294, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
