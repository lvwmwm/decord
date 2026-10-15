// Module ID: 11936
// Function ID: 11937
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5115, 11937, 2000, 2]
// Exports: default

// Module 11936 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11937, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
