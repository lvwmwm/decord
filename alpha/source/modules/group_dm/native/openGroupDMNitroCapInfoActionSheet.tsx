// Module ID: 12345
// Function ID: 12346
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5253, 12346, 1995, 2]
// Exports: default

// Module 12345 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12346, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
