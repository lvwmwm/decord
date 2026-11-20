// Module ID: 12940
// Function ID: 12941
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5008, 12941, 2119, 2]
// Exports: default

// Module 12940 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12941, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
