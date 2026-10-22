// Module ID: 10002
// Function ID: 10003
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5196, 6657, 10003, 2002, 2]
// Exports: default

// Module 10002 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10003, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
