// Module ID: 10902
// Function ID: 10903
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5552, 6848, 10903, 2121, 2]
// Exports: default

// Module 10902 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10903, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
