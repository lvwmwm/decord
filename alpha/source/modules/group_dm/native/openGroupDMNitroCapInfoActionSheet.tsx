// Module ID: 11814
// Function ID: 11815
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4854, 11815, 1987, 2]
// Exports: default

// Module 11814 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11815, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
