// Module ID: 13102
// Function ID: 13103
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5226, 13103, 2119, 2]
// Exports: default

// Module 13102 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13103, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
