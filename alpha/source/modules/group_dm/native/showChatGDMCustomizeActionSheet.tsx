// Module ID: 10669
// Function ID: 10670
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4860, 5099, 10670, 1987, 2]
// Exports: default

// Module 10669 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10670, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
