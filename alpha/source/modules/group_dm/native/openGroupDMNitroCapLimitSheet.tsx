// Module ID: 11076
// Function ID: 11077
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4796, 11077, 1980, 2]
// Exports: default

// Module 11076 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11077, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
