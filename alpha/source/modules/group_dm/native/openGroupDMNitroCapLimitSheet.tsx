// Module ID: 11933
// Function ID: 11934
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4796, 11934, 1980, 2]
// Exports: default

// Module 11933 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11934, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
