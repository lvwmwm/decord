// Module ID: 12059
// Function ID: 12060
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5171, 12060, 2002, 2]
// Exports: default

// Module 12059 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12060, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
