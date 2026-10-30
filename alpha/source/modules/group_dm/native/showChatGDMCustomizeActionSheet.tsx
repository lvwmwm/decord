// Module ID: 10118
// Function ID: 10119
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5253, 6738, 10119, 1995, 2]
// Exports: default

// Module 10118 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10119, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
