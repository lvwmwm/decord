// Module ID: 11656
// Function ID: 11657
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4796, 11657, 1980, 2]
// Exports: default

// Module 11656 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11657, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
