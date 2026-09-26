// Module ID: 12470
// Function ID: 12471
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4755, 12471, 1980, 2]
// Exports: default

// Module 12470 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12471, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
