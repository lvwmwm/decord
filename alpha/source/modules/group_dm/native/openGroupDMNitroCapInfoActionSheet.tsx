// Module ID: 12094
// Function ID: 12095
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5211, 12095, 1999, 2]
// Exports: default

// Module 12094 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12095, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
