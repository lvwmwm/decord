// Module ID: 10369
// Function ID: 10370
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4796, 5032, 10370, 1980, 2]
// Exports: default

// Module 10369 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10370, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
