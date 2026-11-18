// Module ID: 12988
// Function ID: 12989
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5037, 12989, 2121, 2]
// Exports: default

// Module 12988 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12989, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
