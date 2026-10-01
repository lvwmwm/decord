// Module ID: 10380
// Function ID: 10381
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4800, 5039, 10381, 1981, 2]
// Exports: default

// Module 10380 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10381, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
