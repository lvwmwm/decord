// Module ID: 11295
// Function ID: 11296
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4830, 11296, 1981, 2]
// Exports: default

// Module 11295 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11296, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
