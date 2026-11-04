// Module ID: 10138
// Function ID: 10139
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5258, 6744, 10139, 1994, 2]
// Exports: default

// Module 10138 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10139, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
