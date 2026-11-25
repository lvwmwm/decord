// Module ID: 13063
// Function ID: 13064
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5127, 13064, 2119, 2]
// Exports: default

// Module 13063 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13064, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
