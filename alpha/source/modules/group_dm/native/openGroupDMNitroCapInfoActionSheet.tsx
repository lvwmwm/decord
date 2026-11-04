// Module ID: 12741
// Function ID: 12742
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5382, 12742, 2123, 2]
// Exports: default

// Module 12741 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12742, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
