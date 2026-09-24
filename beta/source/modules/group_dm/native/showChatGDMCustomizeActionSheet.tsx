// Module ID: 11260
// Function ID: 11261
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4757, 4993, 11261, 1984, 2]
// Exports: default

// Module 11260 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11261, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
