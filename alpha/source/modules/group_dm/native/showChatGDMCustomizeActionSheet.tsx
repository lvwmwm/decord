// Module ID: 11265
// Function ID: 11266
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4794, 5030, 11266, 1980, 2]
// Exports: default

// Module 11265 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11266, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
