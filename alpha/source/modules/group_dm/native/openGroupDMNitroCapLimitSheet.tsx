// Module ID: 11956
// Function ID: 11957
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5131, 11957, 2119, 2]
// Exports: default

// Module 11956 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11957, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
