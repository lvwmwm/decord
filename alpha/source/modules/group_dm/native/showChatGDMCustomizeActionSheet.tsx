// Module ID: 10839
// Function ID: 10840
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5489, 6785, 10840, 2118, 2]
// Exports: default

// Module 10839 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10840, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
