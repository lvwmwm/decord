// Module ID: 11896
// Function ID: 11897
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5056, 11897, 2000, 2]
// Exports: default

// Module 11896 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11897, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
