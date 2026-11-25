// Module ID: 12055
// Function ID: 12056
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5226, 12056, 2119, 2]
// Exports: default

// Module 12055 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(12056, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
