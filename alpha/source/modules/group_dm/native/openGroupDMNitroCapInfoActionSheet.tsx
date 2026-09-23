// Module ID: 12521
// Function ID: 12522
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4794, 12522, 1980, 2]
// Exports: default

// Module 12521 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12522, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
