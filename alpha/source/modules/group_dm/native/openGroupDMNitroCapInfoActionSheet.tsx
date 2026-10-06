// Module ID: 11828
// Function ID: 11829
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4860, 11829, 1987, 2]
// Exports: default

// Module 11828 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11829, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
