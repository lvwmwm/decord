// Module ID: 11875
// Function ID: 11876
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4755, 11876, 1980, 2]
// Exports: default

// Module 11875 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11876, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
