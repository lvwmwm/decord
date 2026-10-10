// Module ID: 11894
// Function ID: 11895
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5056, 11895, 2000, 2]
// Exports: default

// Module 11894 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11895, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
