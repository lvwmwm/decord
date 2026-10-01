// Module ID: 11303
// Function ID: 11304
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4809, 11304, 1981, 2]
// Exports: default

// Module 11303 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11304, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
