// Module ID: 9928
// Function ID: 9929
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5155, 6190, 9929, 2002, 2]
// Exports: default

// Module 9928 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(9929, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
