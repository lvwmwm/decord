// Module ID: 12659
// Function ID: 12660
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5381, 12660, 2123, 2]
// Exports: default

// Module 12659 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12660, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
