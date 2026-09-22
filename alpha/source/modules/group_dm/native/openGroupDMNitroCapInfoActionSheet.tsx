// Module ID: 12445
// Function ID: 12446
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4724, 12446, 1980, 2]
// Exports: default

// Module 12445 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12446, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
