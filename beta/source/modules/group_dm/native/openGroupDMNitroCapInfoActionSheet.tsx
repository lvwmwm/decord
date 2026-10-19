// Module ID: 12039
// Function ID: 12040
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5155, 12040, 2002, 2]
// Exports: default

// Module 12039 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12040, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
