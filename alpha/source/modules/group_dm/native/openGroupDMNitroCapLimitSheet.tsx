// Module ID: 11170
// Function ID: 11171
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5155, 11171, 2002, 2]
// Exports: default

// Module 11170 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11171, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
