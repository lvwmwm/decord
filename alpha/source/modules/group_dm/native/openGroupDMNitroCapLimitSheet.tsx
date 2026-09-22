// Module ID: 11850
// Function ID: 11851
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4724, 11851, 1980, 2]
// Exports: default

// Module 11850 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11851, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
