// Module ID: 11944
// Function ID: 11945
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5008, 11945, 2119, 2]
// Exports: default

// Module 11944 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11945, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
