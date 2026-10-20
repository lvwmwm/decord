// Module ID: 11185
// Function ID: 11186
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5171, 11186, 2002, 2]
// Exports: default

// Module 11185 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11186, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
