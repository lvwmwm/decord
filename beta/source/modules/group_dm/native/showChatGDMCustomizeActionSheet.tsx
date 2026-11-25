// Module ID: 10537
// Function ID: 10538
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5127, 6429, 10538, 2119, 2]
// Exports: default

// Module 10537 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10538, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
