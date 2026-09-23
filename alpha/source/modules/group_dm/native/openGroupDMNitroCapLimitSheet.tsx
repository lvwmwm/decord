// Module ID: 11926
// Function ID: 11927
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4794, 11927, 1980, 2]
// Exports: default

// Module 11926 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11927, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
