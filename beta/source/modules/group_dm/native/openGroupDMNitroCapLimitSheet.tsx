// Module ID: 11846
// Function ID: 11847
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4723, 11847, 1980, 2]
// Exports: default

// Module 11846 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11847, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
