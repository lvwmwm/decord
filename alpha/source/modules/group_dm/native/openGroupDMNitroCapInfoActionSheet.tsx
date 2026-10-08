// Module ID: 11913
// Function ID: 11914
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5054, 11914, 1999, 2]
// Exports: default

// Module 11913 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11914, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
