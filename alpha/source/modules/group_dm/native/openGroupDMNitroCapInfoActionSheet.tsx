// Module ID: 12740
// Function ID: 12741
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5376, 12741, 2118, 2]
// Exports: default

// Module 12740 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12741, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
