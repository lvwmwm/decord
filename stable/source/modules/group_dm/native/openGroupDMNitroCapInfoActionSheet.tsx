// Module ID: 12523
// Function ID: 12524
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5258, 12524, 1994, 2]
// Exports: default

// Module 12523 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12524, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
