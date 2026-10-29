// Module ID: 10091
// Function ID: 10092
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5247, 6731, 10092, 2000, 2]
// Exports: default

// Module 10091 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10092, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
