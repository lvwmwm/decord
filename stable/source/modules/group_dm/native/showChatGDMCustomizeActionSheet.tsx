// Module ID: 11054
// Function ID: 11055
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4603, 4839, 11055, 1896, 2]
// Exports: default

// Module 11054 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11055, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
