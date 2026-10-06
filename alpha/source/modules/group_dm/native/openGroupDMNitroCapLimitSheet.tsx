// Module ID: 11230
// Function ID: 11231
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4860, 11231, 1987, 2]
// Exports: default

// Module 11230 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11231, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
