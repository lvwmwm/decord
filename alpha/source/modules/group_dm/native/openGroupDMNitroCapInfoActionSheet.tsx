// Module ID: 11957
// Function ID: 11958
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5118, 11958, 2002, 2]
// Exports: default

// Module 11957 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11958, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
