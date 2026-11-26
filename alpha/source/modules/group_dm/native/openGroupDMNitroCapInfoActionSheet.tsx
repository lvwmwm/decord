// Module ID: 13154
// Function ID: 13155
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5257, 13155, 2120, 2]
// Exports: default

// Module 13154 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13155, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
