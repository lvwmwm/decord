// Module ID: 11090
// Function ID: 11091
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4800, 11091, 1981, 2]
// Exports: default

// Module 11090 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11091, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
