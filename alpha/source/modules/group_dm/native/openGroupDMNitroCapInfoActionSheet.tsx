// Module ID: 11711
// Function ID: 11712
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5060, 11712, 2000, 2]
// Exports: default

// Module 11711 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11712, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
