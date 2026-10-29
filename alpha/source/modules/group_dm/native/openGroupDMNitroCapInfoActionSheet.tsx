// Module ID: 12186
// Function ID: 12187
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5247, 12187, 2000, 2]
// Exports: default

// Module 12186 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12187, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
