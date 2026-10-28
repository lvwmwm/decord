// Module ID: 12233
// Function ID: 12234
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5242, 12234, 2002, 2]
// Exports: default

// Module 12233 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12234, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
