// Module ID: 11328
// Function ID: 11329
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5242, 11329, 2002, 2]
// Exports: default

// Module 11328 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11329, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
