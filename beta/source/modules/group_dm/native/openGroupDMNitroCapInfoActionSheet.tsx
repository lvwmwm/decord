// Module ID: 12201
// Function ID: 12202
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5210, 12202, 2002, 2]
// Exports: default

// Module 12201 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12202, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
