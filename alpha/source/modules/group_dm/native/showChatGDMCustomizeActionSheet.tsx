// Module ID: 9865
// Function ID: 9866
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5118, 6152, 9866, 2002, 2]
// Exports: default

// Module 9865 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(9866, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
