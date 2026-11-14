// Module ID: 13524
// Function ID: 13525
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5552, 13525, 2121, 2]
// Exports: default

// Module 13524 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13525, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
