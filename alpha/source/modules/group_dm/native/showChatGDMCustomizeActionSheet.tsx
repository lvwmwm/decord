// Module ID: 9641
// Function ID: 9642
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5060, 5939, 9642, 2000, 2]
// Exports: default

// Module 9641 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(9642, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
