// Module ID: 10575
// Function ID: 10576
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4809, 5048, 10576, 1981, 2]
// Exports: default

// Module 10575 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10576, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
