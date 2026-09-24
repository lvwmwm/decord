// Module ID: 11751
// Function ID: 11752
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4757, 11752, 1984, 2]
// Exports: default

// Module 11751 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11752, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
