// Module ID: 11728
// Function ID: 11729
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4603, 11729, 1896, 2]
// Exports: default

// Module 11728 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11729, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
