// Module ID: 11881
// Function ID: 11882
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4809, 11882, 1981, 2]
// Exports: default

// Module 11881 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11882, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
