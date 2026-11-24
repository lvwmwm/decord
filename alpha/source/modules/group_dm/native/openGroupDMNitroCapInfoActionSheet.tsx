// Module ID: 12979
// Function ID: 12980
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5131, 12980, 2119, 2]
// Exports: default

// Module 12979 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12980, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
