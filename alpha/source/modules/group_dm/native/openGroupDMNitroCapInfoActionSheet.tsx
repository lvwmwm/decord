// Module ID: 12152
// Function ID: 12153
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5196, 12153, 2002, 2]
// Exports: default

// Module 12152 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12153, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
