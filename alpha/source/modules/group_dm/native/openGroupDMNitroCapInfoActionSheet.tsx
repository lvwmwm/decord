// Module ID: 12132
// Function ID: 12133
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5246, 12133, 1999, 2]
// Exports: default

// Module 12132 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12133, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
