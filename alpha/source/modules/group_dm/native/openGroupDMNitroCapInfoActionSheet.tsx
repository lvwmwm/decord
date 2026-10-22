// Module ID: 12141
// Function ID: 12142
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5196, 12142, 2002, 2]
// Exports: default

// Module 12141 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12142, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
