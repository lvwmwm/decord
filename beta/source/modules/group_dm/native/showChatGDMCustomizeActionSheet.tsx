// Module ID: 9626
// Function ID: 9627
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5056, 5934, 9627, 2000, 2]
// Exports: default

// Module 9626 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(9627, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
