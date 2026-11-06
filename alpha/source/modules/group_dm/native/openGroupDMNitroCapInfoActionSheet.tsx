// Module ID: 12713
// Function ID: 12714
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5404, 12714, 2118, 2]
// Exports: default

// Module 12713 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12714, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
