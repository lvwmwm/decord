// Module ID: 11670
// Function ID: 11671
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4800, 11671, 1981, 2]
// Exports: default

// Module 11670 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11671, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
