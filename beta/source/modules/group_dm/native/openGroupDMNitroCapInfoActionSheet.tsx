// Module ID: 11898
// Function ID: 11899
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5056, 11899, 2000, 2]
// Exports: default

// Module 11898 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11899, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
