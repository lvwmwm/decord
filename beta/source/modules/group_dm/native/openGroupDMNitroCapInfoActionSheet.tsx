// Module ID: 12757
// Function ID: 12758
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5406, 12758, 2118, 2]
// Exports: default

// Module 12757 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12758, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
