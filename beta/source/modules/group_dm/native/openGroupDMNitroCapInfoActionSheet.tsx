// Module ID: 12330
// Function ID: 12331
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4725, 12331, 1984, 2]
// Exports: default

// Module 12330 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12331, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
