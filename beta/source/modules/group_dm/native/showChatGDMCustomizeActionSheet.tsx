// Module ID: 10259
// Function ID: 10260
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5374, 6799, 10260, 2118, 2]
// Exports: default

// Module 10259 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10260, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
