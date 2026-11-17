// Module ID: 13681
// Function ID: 13682
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5546, 13682, 2121, 2]
// Exports: default

// Module 13681 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13682, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
