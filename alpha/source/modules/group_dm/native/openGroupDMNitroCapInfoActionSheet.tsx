// Module ID: 11960
// Function ID: 11961
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5118, 11961, 2002, 2]
// Exports: default

// Module 11960 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11961, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
