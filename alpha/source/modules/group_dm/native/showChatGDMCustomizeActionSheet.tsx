// Module ID: 11412
// Function ID: 11413
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5257, 6130, 11413, 2120, 2]
// Exports: default

// Module 11412 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(11413, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
