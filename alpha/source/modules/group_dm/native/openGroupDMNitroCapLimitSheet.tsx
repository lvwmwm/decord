// Module ID: 11257
// Function ID: 11258
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5196, 11258, 2002, 2]
// Exports: default

// Module 11257 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11258, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
