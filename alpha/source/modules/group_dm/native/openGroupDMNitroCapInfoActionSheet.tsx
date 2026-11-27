// Module ID: 13162
// Function ID: 13163
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5257, 13163, 2120, 2]
// Exports: default

// Module 13162 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13163, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
