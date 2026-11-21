// Module ID: 13062
// Function ID: 13063
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5127, 13063, 2119, 2]
// Exports: default

// Module 13062 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13063, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
