// Module ID: 9582
// Function ID: 9583
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5054, 5940, 9583, 1999, 2]
// Exports: default

// Module 9582 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(9583, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
