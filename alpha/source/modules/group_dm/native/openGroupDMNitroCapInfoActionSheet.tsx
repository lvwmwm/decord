// Module ID: 11873
// Function ID: 11874
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4830, 11874, 1981, 2]
// Exports: default

// Module 11873 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11874, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
