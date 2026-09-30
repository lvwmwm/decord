// Module ID: 10583
// Function ID: 10584
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4830, 5069, 10584, 1981, 2]
// Exports: default

// Module 10583 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10584, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
