// Module ID: 10276
// Function ID: 10277
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5404, 6824, 10277, 2118, 2]
// Exports: default

// Module 10276 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10277, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
