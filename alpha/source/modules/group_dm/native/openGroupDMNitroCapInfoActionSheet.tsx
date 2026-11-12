// Module ID: 13421
// Function ID: 13422
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [5489, 13422, 2118, 2]
// Exports: default

// Module 13421 (openGroupDMNitroCapInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13422, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
