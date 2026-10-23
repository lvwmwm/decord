// Module ID: 12171
// Function ID: 12172
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5208, 12172, 2002, 2]
// Exports: default

// Module 12171 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12172, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
