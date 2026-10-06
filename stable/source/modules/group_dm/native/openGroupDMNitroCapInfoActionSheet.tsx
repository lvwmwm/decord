// Module ID: 11558
// Function ID: 11559
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4801, 11559, 1987, 2]
// Exports: default

// Module 11558 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11559, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
