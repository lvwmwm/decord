// Module ID: 11850
// Function ID: 11851
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5055, 11851, 2000, 2]
// Exports: default

// Module 11850 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11851, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
