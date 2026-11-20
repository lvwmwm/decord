// Module ID: 13526
// Function ID: 13527
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5542, 13527, 2121, 2]
// Exports: default

// Module 13526 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13527, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
