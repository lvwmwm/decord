// Module ID: 10492
// Function ID: 10493
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5037, 6337, 10493, 2121, 2]
// Exports: default

// Module 10492 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10493, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
