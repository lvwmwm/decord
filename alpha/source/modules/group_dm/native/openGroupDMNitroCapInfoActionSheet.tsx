// Module ID: 12748
// Function ID: 12749
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5384, 12749, 2123, 2]
// Exports: default

// Module 12748 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12749, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
