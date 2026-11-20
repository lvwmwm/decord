// Module ID: 10412
// Function ID: 10413
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5008, 6310, 10413, 2119, 2]
// Exports: default

// Module 10412 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10413, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
