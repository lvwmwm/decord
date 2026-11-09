// Module ID: 12726
// Function ID: 12727
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5374, 12727, 2118, 2]
// Exports: default

// Module 12726 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12727, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
