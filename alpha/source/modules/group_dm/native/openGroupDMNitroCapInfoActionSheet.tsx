// Module ID: 12530
// Function ID: 12531
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4796, 12531, 1980, 2]
// Exports: default

// Module 12530 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12531, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
