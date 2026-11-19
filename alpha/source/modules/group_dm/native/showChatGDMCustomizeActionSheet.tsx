// Module ID: 10470
// Function ID: 10471
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5006, 6308, 10471, 2121, 2]
// Exports: default

// Module 10470 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10471, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
