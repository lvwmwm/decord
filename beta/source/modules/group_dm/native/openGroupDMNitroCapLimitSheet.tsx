// Module ID: 11715
// Function ID: 11716
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4725, 11716, 1984, 2]
// Exports: default

// Module 11715 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11716, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
