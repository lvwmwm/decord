// Module ID: 10422
// Function ID: 10423
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4801, 5040, 10423, 1987, 2]
// Exports: default

// Module 10422 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10423, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
