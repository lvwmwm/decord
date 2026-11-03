// Module ID: 10268
// Function ID: 10269
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5381, 6864, 10269, 2123, 2]
// Exports: default

// Module 10268 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10269, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
