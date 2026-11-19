// Module ID: 12970
// Function ID: 12971
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5006, 12971, 2121, 2]
// Exports: default

// Module 12970 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12971, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
