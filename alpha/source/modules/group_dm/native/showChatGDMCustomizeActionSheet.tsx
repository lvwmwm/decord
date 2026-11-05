// Module ID: 10324
// Function ID: 10325
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5384, 6882, 10325, 2123, 2]
// Exports: default

// Module 10324 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10325, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
