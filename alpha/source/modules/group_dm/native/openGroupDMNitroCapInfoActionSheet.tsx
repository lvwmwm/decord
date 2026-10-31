// Module ID: 12383
// Function ID: 12384
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5258, 12384, 1994, 2]
// Exports: default

// Module 12383 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12384, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
