// Module ID: 12198
// Function ID: 12199
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5210, 12199, 2002, 2]
// Exports: default

// Module 12198 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12199, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
