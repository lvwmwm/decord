// Module ID: 10024
// Function ID: 10025
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5208, 6670, 10025, 2002, 2]
// Exports: default

// Module 10024 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10025, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
