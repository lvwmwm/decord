// Module ID: 11212
// Function ID: 11213
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4755, 4991, 11213, 1980, 2]
// Exports: default

// Module 11212 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11213, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
