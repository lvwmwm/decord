// Module ID: 10718
// Function ID: 10719
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5055, 10719, 2000, 2]
// Exports: default

// Module 10718 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(10719, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
