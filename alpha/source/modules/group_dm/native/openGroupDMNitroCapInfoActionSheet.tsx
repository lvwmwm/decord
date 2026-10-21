// Module ID: 12122
// Function ID: 12123
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5192, 12123, 2002, 2]
// Exports: default

// Module 12122 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12123, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
