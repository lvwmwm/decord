// Module ID: 10027
// Function ID: 10028
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5211, 6673, 10028, 1999, 2]
// Exports: default

// Module 10027 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10028, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
